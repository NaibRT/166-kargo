import axios from 'axios';
import { useRouter } from "next/router";
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Button from "../components/button/index";
import Card from "../components/card/card";
import FromGroup from "../components/form-group/form-group";
import Input from "../components/input/input";
import Page from "../components/page/page";
import Tabel from "../components/tabel/tabel";


function Search() {
    const [results,setResults] = useState({
        data:[],
        isloaded:''
    });
    const {register,handleSubmit} = useForm();
    const {locale} = useRouter();

    const submit = (data) => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}batch/${data.searchKey}?lan=${locale}`,{
            headers: {
                'Content-Type':'application/json'
            //   'authorization': `Bearer ${props.entry.user.accessToken}`
            }
          }).then(res => {
            setResults({
                data: [...res.data.map(x => ({track_number: x.track_number, status: x.status.name}))],
                isloaded:true
            })
          }).catch(err => {
              setResults({
                 data:[],
                 isloaded:false 
              })
          })
    }
    return (
        <Page className='bg-bg pt-lg pb-lg'>
            <Card className='bg-white w-100 p-lg'>
              <Card.Header text='Bağlamanızı axtarın' style={{justifyContent:'center'}}/>
              <Card.Body style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                  <div className=''>
                  <form 
                     onSubmit={handleSubmit(submit)}
                     style={{display:'flex',alignItems:'center',width:'max-content'}}>
                      <FromGroup 
                        className='mr-xs'
                        bodyClass='border-subtitle' 
                        bodyStyle={{height:'44px',width:'250px'}}>
                        <Input 
                           name='searchKey' 
                           className='pl-xs'
                           placeholder='izləmə kodunu daxil edin'
                           Ref={register()}
                        />
                      </FromGroup>
                      <Button 
                         type='submit'
                         label='Axtar' 
                         className='pl-lg pr-lg pt-sm pb-sm'/>
                 </form>
                 <div style={{display:'flex',alignItems:'flex-end'}}><small style={{fontSize:'xx-small'}}>nümunə: 77498777656658</small></div>
                 </div>
                 {
                   results.isloaded === true ? <Tabel
                   className='w-75 mt-lg'
                   th={[
                       'Izləmə kodu',
                       'Bağlamanın statusu'
                   ]}
                   data={results.data}
                   renderBody={(x) => (
                       <td>{x}</td>
                   )}
                 />

                 : results.isloaded === false ?
                   <h3 className='mt-lg'>Axtarışınıza uyğun bağlama tapılmadı</h3>
                 : null
                 }
                 
              </Card.Body>
            </Card>
           {/* <ResponcePage
             url='/assets/icons/Group 181.svg'
             msg='Əməliyyat uğursuz oldu'
             info='5 saniyə əzində xxx səhifəsinə yönləndiriləcəksiniz'
           /> */}
        </Page>
    )
}

export default Search
