import type { NextPage } from 'next'
import Head from 'next/head'
import Axios from 'axios'

import { useEffect, useState } from 'react'
Axios.defaults.baseURL = "http://localhost:6555/api";
const Home: NextPage = () => {
  const[options,setoptions]=useState(["داستان نویسی","نقاشی","علوم","ریاضی","کتابخوانی","نجوم"]);
  const[categories,setcategories]=useState([{"title":"اول","value":1},{"title":"دوم","value":2},{"title":"سوم","value":3},{"title":"چهارم","value":4},{"title":"پنجم","value":5},{"title":"ششم","value":6},
  {"title":"هفتم","value":7},{"title":"هشتم","value":8},{"title":"نهم","value":9},{"title":"دهم","value":10},{"title":"یازدهم","value":11},{"title":"دوازدهم","value":12}]);
  const[grades,setGrades]=useState([""]);
  const[gradecategoried,setGradeCategory]=useState([]);
  const[categoryvalue,setCategoryvalue]=useState(1);
  const[favirotes,setFavirotes]=useState([""])
  const[anjomans,setAnjomans]=useState([""]);
  const[name,setname]=useState("")
  const[family,setFamily]=useState("")
  const[fathername,setFathername]=useState("")
  const[nationalcode,setNationlacode]=useState("")
  const[schoolname,setSchoolname]=useState("")
  const[mobilenumber,setMobilenumber]=useState("")
  const[shadnumber,setShadnumber]=useState("")
  
  
  const chageFavirotes=(age:number)=> {
    if (age<=4) {
      setFavirotes(["داستان نویسی","نقاشی","علوم","ریاضی ","کتابخوانی"])
    } else if (age>4 && age<=6) {
      setFavirotes(["داستان نویسی","نقاشی","علوم","ریاضی ","کتابخوانی","نجوم","برنامه نویسی"])
    }else if (age>=7 && age<=9) {
      setFavirotes(["علوم تجربی","ریاضی","هنر","فلسفه علم","نجوم","رباتیک","مقاله نویسی","ادبیات","کتابخوانی"])
    }else if (age>=10) {
      setFavirotes([
        "فیزیک",
        "شیمی",
        "زیست شناسی",
        "جغرافیا و محیط زیست",
        "ادبیات",
        "فلسفه علم",
        "مقاله نویسی",
        "رباتیک",
        "نجوم",
        "کتابخوانی"
      ])
    }

  }

  const saveform= async() =>  {

    var formdata =new FormData()
     try {
    formdata.append("name",name)
    formdata.append("family",family)
    formdata.append("father_name",fathername)
    formdata.append("national_caode",nationalcode)
    formdata.append("phone",mobilenumber)
    const res = await Axios.post("/user", formdata);
    
      if (res.data) {
        console.log(res);
        toast({
          title: "Image Uploaded",
          description: "با موفقیت ثبت شد",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      } 
    }catch (error) {
        console.log(console.error());
    }
        
      
      

  }

  const chageanjoman=(value:number) =>{
    if (value>=10) {
      setAnjomans([
        "زیست و فناوری","نجوم",
        "انرژی های نوین",
        "ُسلول های بنیادی",
        "ادبیات و علوم انسانی",
        "برنامه نویسی",
        "نانو فناوری",
        "فناوری های حوزه فضایی",
        "گیاهان دارویی",
        "مسابقات آزمایشگاهی",
        "فیزیک",
        "شیمی",
        "زیست شناسی"
      ]);
    } else
      setAnjomans([""]);
  }
  const changevalue=(value:number) =>
  {
    chageFavirotes(value);
    chageanjoman(value);
     if (value<=6) {
      setGrades(["اول ابتدایی"]);
    }else if (value>6 && value<=9) {
      setGrades(["متوسطه اول"]);
    }else {
      setGrades(["ریاضی","علوم انسانی","تجربی","فنی وحرفه ای","کارودانش"]);
    }
    
  }

  // useEffect(()=>{
  
  //   chageFavirotes(categoryvalue);
  // if (categoryvalue<=6) {
  //   setGrades(["اول ابتدایی"]);
  // }else if (categoryvalue>6 && categoryvalue<=9) {
  //   setGrades(["متوسطه اول"]);
  // }else {
  //   setGrades(["ریاضی","علوم انسانی","تجربی","فنی وحرفه ای","کارودانش"]);
  // }
  // },[1]);
  
  return (
    <div>
   
  
     <Head>
    
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css" integrity="sha384-gXt9imSW0VcJVHezoNQsP+TNrjYXoGcrqBZJpry9zJt8PCQjobwmhMGaDHTASo9N" crossOrigin="anonymous"/>
     </Head>
    <div className="container">
    <main>
      <div className="py-5 text-center">
            <h3>پژوهشسرای دکتر حسابی</h3>
        <p className="lead">فرم ثبت نام دانش آموزان</p>
      </div>
  
      <div className="row g-3">
      <div className="col-md-5 col-lg-4 order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">مدارک مورد نیاز </span>
          <span className="badge bg-secondary rounded-pill">3</span>
        </h4>
         <div className="row g-3">
        <div className="col-sm-10">
                 <label htmlFor="personimage" className="form-label">عکس پرسنلی</label>
                <input type="file" className="form-control" accept="image/*" id="image1" name="personimage"  placeholder=""  required
                
                
                />
                 <div className="invalid-feedback">
                  عکس پرسنلی را مشخص کنید
                </div>
              </div>
             
              
              <div className="col-sm-10">
                 <label htmlFor="shenasnamehimage" className="form-label">صفحه اول شناسنامه </label>
                <input type="file" className="form-control" accept="image/*" id="image2" name="shenasnamehimage"  placeholder=""  required
                
                
                />
               <div className="invalid-feedback">
            عکس شناسنامه را وارد کنید
                </div>
              </div>
              
              
              <div className="col-sm-10">
                 <label htmlFor="certimage" className="form-label"> گواهی اشتغال به تحصیل</label>
                <input type="file" className="form-control" accept="image/*" id="image3" name="certimage"  placeholder=""  required
                
                
                />
               <div className="invalid-feedback">
               گواهی اشتغال به تحصیل را وارد نمایید
                </div>
              </div>
              </div>
        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">مشخصات فردی دانش آموز</h4>
          {/* <form className="needs-validation"  noValidate> */}
            <div className="row g-3">
              <div className="col-sm-4">
                <label htmlFor="name" className="form-label">نام</label>
                <input type="text" className="form-control" id="name"  placeholder="" value={name} required
                
                onChange={e=>setname(e.target.value)}
                />
                <div className="invalid-feedback">
               نام خود را به صورت صحیح وارد نمایید
                </div>
              </div>
  
              <div className="col-sm-4">
                <label htmlFor="family" className="form-label">نام خانوادگی</label>
                <input type="text" className="form-control"  id="family" placeholder="" value={family} required
                  onChange={e=>setFamily(e.target.value)}
                />
                <div className="invalid-feedback">
                نام خانوادگی خود را وارد نمایید
                </div>
              </div>
                <div className="col-sm-4">
                <label htmlFor="fathername" className="form-label">نام پدر</label>
                <input type="text" className="form-control" id="fathername" placeholder="" value={fathername} 
                
                required
                 onChange={e=>setFathername(e.target.value)}
                />
                <div className="invalid-feedback">
                نام پدر خود را وارد نمایید
                </div>
              </div>
              <div className="col-sm-4">
                <label htmlFor="nationalcode" className="form-label">کد ملی </label>
                <input type="number" className="form-control" id="nationalcode" placeholder="" value={nationalcode} required
                 onChange={e=>setNationlacode(e.target.value)}
                />
                <div className="invalid-feedback">
                کد ملی خود را به صورت صحیح وارد نمایید
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="edubase" className="form-label">پایه تحصیلی</label>
                <select className="form-select" id="edubase" key="edubase" required onChange={(e)=>changevalue(Number(e.target.value))
                }
                
                >
                  {categories.map((element)=><option key={element.value} value={element.value}>{element.title}</option>) }
                  
                 
                </select>
                <div className="invalid-feedback">
            پایه تحصیلی خود را وارد نمایید
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="gradebase" className="form-label">رشته تحصیلی</label>
                <select className="form-select" id="gradebase" required>
                   {
                     grades.map((element)=><option key="key1" >{element}</option>)
                   }
                  
                
                </select>
                <div className="invalid-feedback">
            رشته تحصیلی خود را وارد نمایید
                </div>
              </div>
              <div className="col-sm-4">
                <label htmlFor="schoolname" className="form-label"> آموزشگاه محل تحصیل</label>
                <input type="text" className="form-control" id="schoolname" placeholder="" value={schoolname} required
                  onChange={e=>setSchoolname(e.target.value)}
                />
                <div className="invalid-feedback">
             نام آموزشگاه محل تحصیل خود را وارد نمایید
                </div>
              </div>
              <div className="col-sm-4">
                <label htmlFor="mobilenumber" className="form-label"> شماره تماس</label>
                <input type="number" className="form-control" id="mobilenumber" placeholder="" value={mobilenumber} required
                  onChange={e=>setMobilenumber(e.target.value)}
                />
                <div className="invalid-feedback">
                شماره تماس خود را وارد نمایید
                </div>
              </div>
              <div className="col-sm-4">
                <label htmlFor="shadnumber" className="form-label"> شماره شاد</label>
                <input type="number" className="form-control" id="shadnumber" placeholder="" value={shadnumber} required
                
                  onChange={e=>setShadnumber(e.target.value)}
                />
                <div className="invalid-feedback">
                شماره شاد خود را وارد نمایید
                </div>
              </div>
  
  
           
  
  
           
  
             
  
             
            </div>
  
            <hr className="my-4"/>
            <h4 className="mb-3"> علاقه مندی ها</h4>
             {
               favirotes.map(favirote=><div className="form-check form-check-inline" key="key2">
               <input type="checkbox" className="form-check-input" id="same-address"/>
               <label className="form-check-label" htmlFor="same-address">{favirote} </label>
             </div>)
             }
            
         

  
  
  
  
  
           
            {anjomans.length>1? <div>
              
              <hr className="my-4"/>
               <h4 className="mb-3">انجمن ها</h4>
               {
               anjomans.map(anjoman=><div className="form-check form-check-inline" key="key3">
               <input type="checkbox" className="form-check-input" id="same-address"/>
               <label className="form-check-label" htmlFor="same-address">{anjoman} </label>
             </div>)
             }
  
               </div>:<div></div>}
          
  
           
       
  
            <hr className="my-4"/>
  
            <button className="w-100 btn btn-primary btn-lg" id="btnsave" onClick={saveform} > ثبت نام</button>
          {/* </form> */}
        </div>
      </div>
      
    </main>
    </div>
    
    </div>
  )
}
export default Home
function toast(arg0: { title: string; description: any; status: string; duration: number; isClosable: boolean; }) {
  throw new Error('Function not implemented.');
}

