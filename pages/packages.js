import axios from "axios";
import { useRouter } from "next/router";
import React, { memo, useLayoutEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import AsideMenu from "../components/aside-menu/index";
import Aside from "../components/aside/aside";
import ButtonComponent from "../components/button";
import Card from "../components/card/card";
import Checkbox from "../components/checkbox/checkbox";
import FromGroup from "../components/form-group/form-group";
import Input from "../components/input/input";
import Main from "../components/main/main";
import PackageItem from "../components/package_item/package-item";
import Page from "../components/page/page";
import Redirect from "../components/redirect/redirect";
import Tabel from "../components/tabel/tabel";
import { PayByBalanceAction } from '../redux/entry/entryActions';


function Packages(props) {
  if (!props.entry.isLoged) {
    return <Redirect />;
  }

  const { register, handleSubmit, errors, setError } = useForm();
  const { formatMessage: f } = useIntl();
  const [balance, setBalance] = useState([]);
  const [packages, setPackages] = useState([]);
  const [filteredPacks, setFilteredPacks] = useState([]);
  const [status, setStatus] = useState([]);
  const [selectedPackages, setSelectedPackages] = useState({
    packages: [],
    total: 0,
    discountTotal:0,
    code: "",
    isAccepted: false,
    status: 0,
  });

  const { locale } = useRouter();
  const mainCheckRef = useRef();
  const checkRefs = useRef([]);
  checkRefs.current = [];
  const tabRefs = useRef([]);
  tabRefs.current = [];

  const submit = (data) => {
    console.log(data);

    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}promocode?promocode=${data.promocode}&status=${selectedPackages.status}`,
        {},
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${props.entry.user.accessToken}`,
          },
        }
      )
      .then((res) => {
        if(res.data.status == 2){
           setBalance(res.data.balance)
        }else{
          setPackages(res.data.batches);
          setFilteredPacks(res.data.batches);
        }

        Swal.fire({
          icon:'success',
          text:res.data.success,
        })

      })
      .catch((err) => {
        setError("promocode", { message: err.response.data.error });
      });
  };

  const PromisAll = async () => {
    let batchesData = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}batches?lan=${locale}`, {
      headers: {
        authorization: `Bearer ${props.entry.user.accessToken}`,
      },
    });
    let statusData = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}status?lan=${locale}`, {
      headers: {
        authorization: `Bearer ${props.entry.user.accessToken}`,
      },
    });
    return {
      batchesData:batchesData.data,
      statusData:statusData.data
    }
  }
  
  useLayoutEffect(() => {
    PromisAll().then(res => {
      setPackages(res.batchesData);
      setFilteredPacks(res.batchesData);
      setStatus(res.statusData);
    }).catch(err => console.log(err))

  }, []);
  
  useLayoutEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}balans`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${props.entry.user.accessToken}`
          }
    })
         .then(res => {
            setBalance(res.data)
         })
},[])

  const addTabRefs = (ref) => {
    if (ref && !tabRefs.current.includes(ref)) {
      tabRefs.current.push(ref);
    }
  };

  const toggleTabRefs = async (ev) => {
    tabRefs.current.forEach((x) => x.classList.remove("pack-active"));
    ev.target.classList.add("pack-active");
  };

  const getBatchesByStatausId = async (id) =>{
     axios.get(`${process.env.NEXT_PUBLIC_API_URL}batches?status=${id}&lan=${locale}`, {
      headers: {
        authorization: `Bearer ${props.entry.user.accessToken}`,
      },
    }).then((res) => {
      setPackages(res.data);
      setFilteredPacks(res.data);
    }).catch(err => console.log(err))

  
  };

  const tabButtonClick = (ev) => {
    let id = ev.target.getAttribute("data-id");
    toggleTabRefs(ev);
    getBatchesByStatausId(id)
    if (id != 0) {
      let newPackages = packages.filter((x) => x.status.id == id);
      setFilteredPacks([...newPackages]);
    } else {
      setFilteredPacks([...packages]);
    }

    setSelectedPackages({
      discountTotal: 0,
      packages: [],
      total: 0,
      code: "",
      isAccepted: false,
      status: id,
    });
  };

  const addCheckRefs = (ref) => {
    if (ref && !checkRefs.current.includes(ref)) {
      checkRefs.current.push(ref);
    }
  };

  const checkHandler = (ev) => {
    let { value, checked } = ev.target;
    let price = ev.target.getAttribute("data-price");
    let dataDiscount = ev.target.getAttribute("data-discount");

    if (checked) {
      selectedPackages.packages.push(value);
      if(dataDiscount!=0){
        setSelectedPackages({
          ...selectedPackages,
          total: (selectedPackages.total+parseFloat(price)),         
          discountTotal: (selectedPackages.discountTotal+parseFloat(dataDiscount)),
          packages: [...selectedPackages.packages],
        });
      
      }else{
        setSelectedPackages({
          ...selectedPackages,
          discountTotal: (selectedPackages.discountTotal+parseFloat(price)),
          total: (selectedPackages.total+parseFloat(price)),
          packages: [...selectedPackages.packages],
        });
      }
     
    } else {
      let newPackages = selectedPackages.packages.filter((x) => x !== value);
      if(dataDiscount!=0){
        setSelectedPackages({
          ...selectedPackages,
          total: selectedPackages.total >0 && (selectedPackages.total-parseFloat(price)),        
          discountTotal: selectedPackages.discountTotal >0 &&  (selectedPackages.discountTotal-parseFloat(dataDiscount)),
          packages: newPackages
        });
      
      }else{
        setSelectedPackages({
          ...selectedPackages,
          discountTotal:selectedPackages.discountTotal >0 && (selectedPackages.discountTotal-parseFloat(price)),
          total:selectedPackages.total >0 && (selectedPackages.total-parseFloat(price)),
          packages:newPackages
        });
      }
     
    }
    !selectedPackages.packages.some((x) => x)
      ? (mainCheckRef.current.checked = false)
      : null;
  };

  const selectAll = (e) => {
    let total = 0;
    let discountTotal = 0;
    let packages = [];

    if (e.target.checked){
      checkRefs.current.forEach((x) => {
        x.checked = !x.disabled && e.target.checked;
        let price = x.getAttribute("data-price");
        let discount = x.getAttribute("data-discount");

        if(!x.disabled && !packages.includes(x.value)){
          packages.push(x.value);
          if(discount!=0){
            total += (+price);
            discountTotal += (+discount)
          }else{
            total += (+price);
            discountTotal += (+price)
          }

        }
      });

      setSelectedPackages({
        ...selectedPackages,
        total: total,
        discountTotal:discountTotal,
        packages: packages,
      });

    }else{
      checkRefs.current.forEach((x) => {
        x.checked = !x.disabled && e.target.checked;
        if(!x.disabled && !packages.includes(x.value)){
          packages = packages.filter((p) => p !== x.value);
          // let price = x.getAttribute("data-price");
          // let discount = x.getAttribute("data-discount");
          // total = selectedPackages.total >0 && selectedPackages.total - (+price);
          // discountTotal = selectedPackages.discountTotal >0 && selectedPackages.discountTotal - (+discount);
        }
      });

      setSelectedPackages({
        ...selectedPackages,
        total: total,
        discountTotal:discountTotal,
        packages: packages,
      });
    }
  };

  const PaybyCard = (data = {}) => {
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}payment`,data,{
      headers:{
        authorization: `Bearer ${props.entry.user.accessToken}`,
      }
    }).then(res => {
      console.log('red',res.data.url);
       window.location.href = res.data.url;
    }).catch(err => console.log(err))
  }

  const PaybyBalance = () => {
    if(props.entry.user.user.balance >=selectedPackages.discountTotal && selectedPackages.packages.length > 0){
      props.PayByBalanceAction('payment',{
        price:selectedPackages.discountTotal,
        sourcetype:3,
        batches:selectedPackages.packages                  
      },
      {
        'authorization':`Bearer ${props.entry.user.accessToken}`
      })
    }else{
      Swal.fire({
        text: 'Balansda kifayət qədər məbləğ yoxdur',
        icon: 'info',
        confirmButtonText: 'OK',
      });
    }

  }

  const addInvoice = (id) => {
    Swal.fire({
      //confirmButtonText: 'OK',
      showCancelButton: true,
      html:`
        <from id='swal-form'>
        <input type="file" id="swal-input1" class="swal2-input" required>
        <input  type="number" min="0" id="swal-input2" class="swal2-input w-100" required>
        </from>
      `
    }).then(res => {
  
        let file = document.getElementById('swal-input1').files;
        let price = document.getElementById('swal-input2').value;
        console.log('filevalue',file);
        let newFromData = new FormData();
        newFromData.set('id',id);
        newFromData.set('invoice',file[0]);
        newFromData.set('price',price);
        newFromData.append('_method','POST')
        // newFromData.set('price',price);
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}batches/invoice`,newFromData,{
            headers: {
              'Content-Type':'multipart/form-data',
              'Accepts':'application/json',
              'Authorization':`Bearer ${props.entry.user.accessToken}`
            },
        }).then(res => {
            console.log(res.data)
            let currentPanks = filteredPacks.filter(x => x.id != id);
            setPackages([
              ...currentPanks,
              res.data.batch[0]
            ])
            setFilteredPacks([
              ...currentPanks,
              res.data.batch[0]
            ])
            Swal.fire({
               confirmButtonText: 'OK',
               icon:'success',
               text:res.data.success,
            })
        }).catch(err => console.log(err))


    });
  }
 
  return (
    <Page className="bg-bg pt-lg pb-lg">
      <Aside className="mr-sm">
        <AsideMenu balance={balance} />
      </Aside>
      <Main className="bg-c p-none">
        <Card className="bg-bg pb-sm mgm_ss p-sm">
          <Card.Header
            text={f({ id: "active-pac" })}
            endElelment={
              <Checkbox
                text={f({ id: "choose-all" })}
                Ref={(ref) => (mainCheckRef.current = ref)}
                onClick={selectAll}
                className="bg-white border-subtitle"
              />
            }
          />
          <div className="ssc" style={{ overflowX: "scroll" }}>
            <div
              className=" pl-none"
              style={{
                display: "flex",
                marginBottom: "20px",
                width: "max-content",
              }}
            >

              {/* <ButtonComponent
                label={`Hamısı (${packages.length})`}
                className=" p-xs bg-bg pack-active"
                data-id={0}
                Ref={addTabRefs}
                onClick={tabButtonClick}
              /> */}

               {status.map((x,i) => (
                <ButtonComponent
                  label={`${x.name} (${x.count})`}
                  className={`p-xs bg-bg ${i==0 && 'pack-active'}`}
                  data-id={x.id}
                  Ref={addTabRefs}
                  onClick={tabButtonClick}
                  key={i}
                />
              ))} 
              
            </div>
          </div>

          <Card.Body className="p-none">
            <div className="packages__fr">
              {filteredPacks
                .filter((x) => x.status.id !== 6)
                .map((p) => (
                  <PackageItem
                    addInvoice={addInvoice}
                    key={p.id}
                    checkRef={addCheckRefs}
                    item={p}
                    onCheck={checkHandler}
                  />
                ))}
            </div>
          </Card.Body>
          <div className="footer__pck">
            <div className="package-total">
              <small>
                {selectedPackages.packages.length} {f({ id: "chosed" })}
              </small>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <b>{f({ id: "total" })}:</b>
                <div style={{ display: "flex", flexDirection: "column" }}>
                {
                  (selectedPackages.discountTotal > 0 && selectedPackages.discountTotal != selectedPackages.total )  ? 
                  <>
                  <del style={{ textDecorationColor: "red" }}>{parseFloat(selectedPackages.total).toFixed(2)} AZN</del>
                   <b>{parseFloat(selectedPackages.discountTotal).toFixed(2)} AZN</b>
                   </>
                   :  <b>{parseFloat(selectedPackages.discountTotal).toFixed(2)} AZN</b>
                }  
                
                 
                </div>
              </div>
            </div>
            <div className="package__btns">
              <form>
                <FromGroup
                  bodyClass="bg-white pl-xs"
                  bodyStyle={{ height: "44px", width: "200px" }}
                  className="mr-xs chng__bodystyle"
                  style={{ marginBottom: "0px" }}
                  error={errors.promocode?.message}
                >
                  <Input
                    placeholder={f({ id: "addcode" })}
                    name="promocode"
                    Ref={register({
                      required: {
                        value: true,
                        message: f({ id: "promo-requir" }),
                      },
                    })}
                    onChange={(e) =>
                      setSelectedPackages({
                        ...selectedPackages,
                        code: e.target.value,
                      })
                    }
                  />
                  {selectedPackages.isAccepted ? (
                    <ButtonComponent
                      className="bg-white w-50"
                      style={{
                        textDecorationLine: "underline",
                        color: "darkblue",
                        padding: "0px 10px",
                      }}
                      label="Ləğv et"
                      onClick={() => {
                        setSelectedPackages({
                          ...selectedPackages,
                          isAccepted: false,
                        });
                      }}
                    />
                  ) : (
                    <ButtonComponent
                      disabled={!selectedPackages.code ? true : false}
                      style={{ padding: "0 10px" }}
                      className="color-white bg-success"
                      label={f({ id: "confirm" })}
                      type="submit"
                      onClick={handleSubmit(submit)}
                    />
                  )}
                </FromGroup>
              </form>
              
              <ButtonComponent
                style={{ padding: "0 20px" }}
                className="color-white bg-success mr-xs desk"
                label={f({ id: "paybycard" })}
                endElement={<span className="color-white pl-sm">&#8594;</span>}
                onClick = {() => PaybyCard({
                  price:selectedPackages.discountTotal,
                  sourcetype:2,
                  batches:selectedPackages.packages
                })}
              />
              <ButtonComponent
                style={{ padding: "0 10px" }}
                className="desk"
                label={f({ id: "paybybalance" })}
                endElement={
                  <span className="color-black mr-xs pl-sm ">&#8594;</span>
                }
                onClick = {PaybyBalance}
              />

              <div className="btn__fkl">
                <ButtonComponent
                  style={{ padding: "0 10px" }}
                  className="color-white bg-success mr-xs"
                  label={f({ id: "paybycard" })}
                  endElement={
                    <span className="color-white pl-sm">&#8594;</span>
                  }
                  onClick = {() => PaybyCard({
                    price:selectedPackages.discountTotal,
                    sourcetype:2,
                    batches:selectedPackages.packages
                  })}
                />
                <ButtonComponent
                  style={{ padding: "0 10px" }}
                  label={f({ id: "paybybalance" })}
                  endElement={
                    <span className="color-black mr-xs pl-sm">&#8594;</span>
                  }
                  onClick = {PaybyBalance}
                />
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-sm bg-white">
          <Card.Header text={f({ id: "order-history" })} />
          <Card.Body className="p-none overflow__package">
            <Tabel
              th={[
                f({ id: "tracking" }),
                f({ id: "shop" }),
                f({ id: "category" }),
                f({ id: "amount" }),
                f({ id: "weight" }),
                f({ id: "delivery" }),
                f({ id: "status" }),
              ]}
              data={
                packages.map((x) => {
                  if (x.status.id == 6) {
                    return {
                      track_number: x.track_number,
                      shop: x.shop,
                      category: x.category,
                      price: `${x.price} ${x.currency}`,
                      weight: `${parseFloat(x.weight).toFixed(2) || 0} kq`,
                      delivery_price:
                        parseFloat(x.delivery_price).toFixed(2) || 0,
                      status: `${x.status.name}\n ${x.date}`,
                    };
                  }
                }) || []
              }
              renderBody={(x, i) => {
                return <td key={i++}>{x}</td>;
              }}
            />
          </Card.Body>
        </Card>
      </Main>
    </Page>
  );
}

const mapStateToProps = (state) => ({
  entry: state.entry,
});
const mapDispatchToProps =  {
  PayByBalanceAction
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(Packages));