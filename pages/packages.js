import axios from "axios";
import { useRouter } from "next/router";
import React, { memo, useLayoutEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { connect } from "react-redux";
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

function Packages(props) {
  if (!props.entry.isLoged) {
    return <Redirect />;
  }

  const { register, handleSubmit, errors, setError } = useForm();
  const { formatMessage: f } = useIntl();
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
        console.log(res.data.batches);
        setPackages(res.data.batches);
        setFilteredPacks(res.data.batches);
      })
      .catch((err) => {
        setError("promocode", { message: err.response.data.error });
      });
  };

  useLayoutEffect(() => {
    // axios.get(`${process.env.NEXT_PUBLIC_API_URL}batches?lan=${locale}`, {
    //     headers: {
    //       authorization: `Bearer ${props.entry.user.accessToken}`,
    //     },
    //   })
    //   .then((res) => {
    //     setPackages(res.data);
    //     setFilteredPacks(res.data);
    //   })
    //   .catch((err) => console.log(err));

    Promise.all([
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}batches?lan=${locale}`, {
        headers: {
          authorization: `Bearer ${props.entry.user.accessToken}`,
        },
      }),
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}status?lan=${locale}`, {
        headers: {
          authorization: `Bearer ${props.entry.user.accessToken}`,
        },
      }),
    ])
      .then((res) => {
        console.log(res.data);
        setPackages(res[0].data);
        setFilteredPacks(res[0].data);
        setStatus(res[1].data);
      })
      .catch((err) => console.log(err));
  }, []);

  const addTabRefs = (ref) => {
    if (ref && !tabRefs.current.includes(ref)) {
      tabRefs.current.push(ref);
    }
  };

  const toggleTabRefs = async (ev) => {
    tabRefs.current.forEach((x) => x.classList.remove("pack-active"));
    ev.target.classList.add("pack-active");
  };

  const tabButtonClick = (ev) => {
    toggleTabRefs(ev);
    let id = ev.target.getAttribute("data-id");
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
    let total=0
    let disc=0
    console.log('dis',dataDiscount)
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

          total: selectedPackages.total >=0 && (selectedPackages.total-parseFloat(price)),
         
          discountTotal: selectedPackages.discountTotal >=0 &&  (selectedPackages.discountTotal-parseFloat(dataDiscount)),
          packages: newPackages
        });
      
      }else{
        setSelectedPackages({
          ...selectedPackages,
          discountTotal:selectedPackages.discountTotal >=0 && (selectedPackages.discountTotal-parseFloat(price)),
          total:selectedPackages.total >=0 && (selectedPackages.total-parseFloat(price)),
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
    checkRefs.current.forEach((x) => {
      x.checked = e.target.checked;

      if (e.target.checked && !packages.includes(x.value)) {
        packages.push(x.value);
        total += +x.getAttribute("data-price");
        discountTotal += +x.getAttribute("data-discount");
      } else {
        packages = packages.filter((p) => p !== x.value);
        total -= total >= 0 && +x.getAttribute("data-price");
        discountTotal -= discountTotal >=0 && +x.getAttribute("data-discount");
      }
    });

    setSelectedPackages({
      ...selectedPackages,
      total: selectedPackages.total-total,
      packages: packages,
    });
  };

  const payment = (data = {}) => {
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}payment`,data,{
      headers:{
        authorization: `Bearer ${props.entry.user.accessToken}`,
      }
    }).then(res => {
        console.log(res.data)
    }).catch(err => console.log(err))
  }

  return (
    <Page className="bg-bg pt-lg pb-lg">
      <Aside className="mr-sm">
        <AsideMenu />
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
          <div class="ssc" style={{ overflowX: "scroll" }}>
            <div
              className=" pl-none"
              style={{
                display: "flex",
                marginBottom: "20px",
                width: "max-content",
              }}
            >

              <ButtonComponent
                label={`Hamsı (${packages.length})`}
                className="mr-xs p-sm bg-bg pack-active"
                data-id={0}
                Ref={addTabRefs}
                onClick={tabButtonClick}
              />

               {status.map((x) => (
                <ButtonComponent
                  label={`${x.name} (${
                    packages.filter((x) => x.status.id == 3).length
                  })`}
                 
                  className=" mr-xs p-sm bg-bg "
                  data-id={x.id}
                  Ref={addTabRefs}
                  onClick={tabButtonClick}
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
                  selectedPackages.discountTotal > 0 ? 
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
                      //  onClick={() =>{
                      //     //  setSelectedPackages({
                      //     //    ...selectedPackages,
                      //     //    isAccepted:true
                      //     //  });
                      //    }}
                    />
                  )}
                </FromGroup>
              </form>
              <ButtonComponent
                style={{ padding: "0 20px" }}
                className="color-white bg-success mr-xs desk"
                label={f({ id: "paybycard" })}
                endElement={<span className="color-white pl-sm">&#8594;</span>}
                onClick = {() => payment({
                  price:selectedPackages.discountTotal,
                  sourcetype:2
                })}
              />
              <ButtonComponent
                style={{ padding: "0 10px" }}
                className="desk"
                label={f({ id: "paybybalance" })}
                endElement={
                  <span className="color-black mr-xs pl-sm ">&#8594;</span>
                }
                onClick = {() => payment({
                  price:selectedPackages.discountTotal,
                  sourcetype:3
                })}
              />

              <div className="btn__fkl">
                <ButtonComponent
                  style={{ padding: "0 10px" }}
                  className="color-white bg-success mr-xs"
                  label={f({ id: "paybycard" })}
                  endElement={
                    <span className="color-white pl-sm">&#8594;</span>
                  }
                  onClick = {() => payment({
                    price:selectedPackages.discountTotal,
                    sourcetype:2
                  })}
                />
                <ButtonComponent
                  style={{ padding: "0 10px" }}
                  label={f({ id: "paybybalance" })}
                  endElement={
                    <span className="color-black mr-xs pl-sm">&#8594;</span>
                  }
                  onClick = {() => payment({
                    price:selectedPackages.discountTotal,
                    sourcetype:3
                  })}
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

export default connect(mapStateToProps)(memo(Packages));
