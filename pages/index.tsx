import type { NextPage } from 'next'
import Head from 'next/head'
import Axios from 'axios'



import { useEffect, useState } from 'react'
import { loadDefaultErrorComponents } from 'next/dist/server/load-components';
Axios.defaults.baseURL = "https://www.mdhrc.ir:6555/api";
const Home: NextPage = () => {
class Errors {
    name:boolean=false
    family:boolean=false
    fathername:boolean=false
    nationalcode:boolean=false
    base:boolean=false
    grade:boolean=false
    schoolname:boolean=false
    phone:boolean=false
   shadnumber:boolean=false
   favirote:boolean=false
   anjoman:boolean=false
   personimage:boolean=false
   shensname:boolean=false
   
   clear() {
    this.name=false
    this.family=false
    this.fathername=false
    this.nationalcode=false
    this.base=false
    this.grade=false
    this.schoolname=false
    this.phone=false
   this.shadnumber=false
   this.favirote=false
   this.anjoman=false
   this.personimage=false
   this.shensname=false
   }
   }
   
  const[categories,setcategories]=useState([
    {"title":"اول","value":1},
    {"title":"دوم","value":2},
    {"title":"سوم","value":3},
    {"title":"چهارم","value":4},
    {"title":"پنجم","value":5},
    {"title":"ششم","value":6},
    {"title":"هفتم","value":7},
    {"title":"هشتم","value":8},
    {"title":"نهم","value":9},
    {"title":"دهم","value":10},
    {"title":"یازدهم","value":11},
    {"title":"دوازدهم","value":12}]);
  const[grades,setGrades]=useState([{"title":"ابتدایی","value":1}]);
  const[gradecategoried,setGradeCategory]=useState(1);
  const[categoryvalue,setCategoryvalue]=useState(1);
  const[listfavirotes,setlistFavirotes]=useState([''])
  const[listanjoman,setListanjomans]=useState([""])
  const[defaultgrade,setDefaultGrade]=useState("ابتدایی")
  const[defaultbase,setDefaultBase]=useState("اول")
  const[errors,seterrors]=useState<Errors>(new Errors())
  const[favirotes,setFavirotes]=useState( [
    {"title":"نقاشی","value":1},
    {"title":"ریاضی","value":2},
    {"title":"علوم","value":3},
    {"title":"نقاشی","value":4},
    {"title":"کتابخوانی","value":5},
    {"title":"داستان نویسی","value":6},

  ])
  const[anjomans,setAnjomans]=useState([{"title":"","value":0}]);
  const[name,setname]=useState("")
  const[family,setFamily]=useState("")
  const[fathername,setFathername]=useState("")
  const[nationalcode,setNationlacode]=useState("")
  const[schoolname,setSchoolname]=useState("")
  const[mobilenumber,setMobilenumber]=useState("")
  const[shadnumber,setShadnumber]=useState("")
  const [personimage, setPersonimage] = useState('');
  const [shenasnamehimage, setShenasnameimage] = useState('');
  const [certimage, setCertimage] = useState('');
  const[issuccess,setissuccess]=useState(false)
  const[iserror,setiserror]=useState(false)
  const[errmessage,seterrmessage]=useState('')

  const handleChangeImage = (event:any) => {
   
    switch(event.target.name) {
      case "personimage":
        setPersonimage(event.target.files[0])
        errors.personimage=false
        break
     case "shenasnamehimage":
       setShenasnameimage(event.target.files[0]) 
       errors.shensname=false
       break
      case  "certimage":
        console.log(event.target.files[0])
        setCertimage(event.target.files[0]) 
        break
    }
  
  };
  const chageFavirotes=(age:number)=> {
     
     
    if (age<=4) {
       setFavirotes(
        [
          {"title":"نقاشی","value":1},
          {"title":"ریاضی","value":2},
          {"title":"علوم","value":3},
          {"title":"کتابخوانی","value":5},
          {"title":"داستان نویسی","value":6},
    
        ]
       )
    } else if (age>4 && age<=6) {
      
       setFavirotes(
        [
          {"title":"نجوم","value":1},
          {"title":"نقاشی","value":2},
          {"title":"ریاضی","value":3},
          {"title":"علوم","value":4},
          {"title":"نقاشی","value":5},
          {"title":"کتابخوانی","value":6},
          {"title":"داستان نویسی","value":7},
          {"title":"برنامه نویسی","value":8},
    
        ]
       )
    }else if (age>=7 && age<=9) {
       setFavirotes([
        {"title":"نجوم","value":1},
        {"title":"هنر","value":2},
        {"title":"ریاضی","value":3},
        {"title":"علوم","value":4},
        {"title":"ادبیات","value":5},
        {"title":"کتابخوانی","value":6},
        {"title":" فلسفه علم","value":7},
        {"title":"برنامه نویسی","value":8},
        {"title":"رباتیک","value":9}]
  
       )
    }else if (age>=10) {
       setFavirotes(
         [
        {"title":"نجوم","value":1},
        {"title":"هنر","value":2},
        {"title":"ریاضی","value":3},
        {"title":"علوم","value":4},
        {"title":"ادبیات","value":5},
        {"title":"کتابخوانی","value":6},
        {"title":" فلسفه علم","value":7},
        {"title":"برنامه نویسی","value":8},
        {"title":"رباتیک","value":9},
        {"title":"زیست شناسی","value":10},
         ]

      )
    }

  }
  const validate=()=> {
   var iserr:Boolean=false
   errors.clear()
   seterrors(errors)
    
    if (name.length==0) {
       errors.name=true
       iserr=true
    }

    if(family.length==0) {
      errors.family=true
      iserr=true
    }
    if(fathername.length==0) {
      errors.fathername=true
      iserr=true
    }
     if(nationalcode.length<10) {
       errors.nationalcode=true
       iserr=true
     }
     if(schoolname.length<3) {
       errors.schoolname=true
       iserr=true
     }
     if (mobilenumber.length<9) {
       errors.phone=true
       iserr=true
     }
     if (shadnumber.length<9) {
       errors.shadnumber=true
       iserr=true
     }
  
     if (personimage.length==0 ) {
      
       errors.personimage=true
       iserr=true
     }
     if (shenasnamehimage.length==0)
      {
        errors.shensname=true
        iserr=true
      }
      if (listfavirotes.length<=1) {
        errors.favirote=true
        iserr=true
      }

      if (listanjoman.length<=1 && grades.length>2) {
         errors.anjoman=true
         iserr=true
      }
    seterrors(errors)
    setGradeCategory(1)
    console.log(iserr)
    return iserr

  }
  const cleardata=() => {
    setname('')
    setFamily('')
    setFathername('')
    setNationlacode('')
    setSchoolname('')
    setMobilenumber('')
    setShadnumber('')
    setPersonimage('')
    setShenasnameimage('')
    setCertimage('')
  }
  const addfavirote= (fav:string )=>
   {
     errors.favirote=false
     seterrors(errors)
     setGradeCategory(7)
    var index 
   index= listfavirotes.indexOf(fav)
   if (index==-1) {
     listfavirotes.push(fav)
   }else
      listfavirotes.splice(index,1)
      
  }
  
  const addanjomans= (fav:string )=>
   {
     errors.anjoman=false
     seterrors(errors)
     setGradeCategory(9)
    var index 
    
    var anjomanstring:string=''
   index= listanjoman.indexOf(fav)
   if (index==-1) {
     listfavirotes.push(fav)
   }else
      listanjoman.splice(index,1)
    
  }
  const saveform= async() =>  {
   
    var fvstring:string=''
    var anjomanstring:string=''
  
    if (validate()) {
      setGradeCategory(4)
      return 
    } 
    
  
    for (let item of favirotes) {
       fvstring+=item.title+","
    }
    for (let item of anjomans) {
      anjomanstring+=item.title+","
    }
    var formdata =new FormData()
   
    // try 
    // {
     
     formdata.append("name",name)
     formdata.append("family",family)
     formdata.append("fathername",fathername)
     formdata.append("nationalcode",nationalcode.toString())
     formdata.append("phone",mobilenumber)
     if (personimage!=null)
     formdata.append("personimage",personimage)
     if (shenasnamehimage!=null)
     formdata.append("shenasnamehimage",shenasnamehimage)
     if (certimage!=null)
     formdata.append("certiamge",certimage)
     formdata.append("base",defaultbase)
     formdata.append("category",defaultgrade)
     formdata.append("shoolname",schoolname)
     formdata.append("shad",shadnumber.toString())
     
     formdata.append("favirotes",fvstring)
     formdata.append("anjomans",anjomanstring)
           
      await Axios.post("/user", formdata).then(res => {
        setissuccess(true)
        cleardata()
        setTimeout(() => {
          setissuccess(false)
        }, 5000);

     }).catch(err=> {
        console.log(err.response)
        setiserror(true)
        seterrmessage(err.response.data.message)
        setTimeout(() => {
          setiserror(false)
        }, 5000);


     })
    //  console.log(res)
    //  if (res.status==200) {
    //       console.log(res);
    //       setissuccess(true)
    //       setTimeout(() => {
    //          setissuccess(false)
    //       }, 5000);
    //   } 
    //   else {
    //     console.log(res)
    //   }
    // }catch (err:any) 
    // {
    //   const { response } = err;
    //   console.log(err)
    //   console.log(response.data.errors)
    //   seterrmessage(err.toString())
    //     setiserror(true)
    //     setTimeout(() => {
    //       setiserror(false)
    //    }, 5000);
    // }
    
  
        
      
    }

  const chageanjoman=(value:number) =>{
 
    if (value>=10) {
      setAnjomans(
        [
          {"title":"نجوم","value":1},
          {"title":"زیست وفناوری","value":2},
          {"title":"انرژی های نوین","value":3},
          {"title":"سلول های بنیادی","value":4},
          {"title":"ادبیات و علوم انسانی","value":5},
          {"title":"برنامه نویسی","value":6},
          {"title":"نانو فناوری","value":7},
          {"title":"فناوری حوزه های فضایی","value":8},
          {"title":"گیاهان دارویی","value":9},
          {"title":"مسابقات آزمایشگاهی","value":10},
          {"title":"فیزیک","value":11},
          {"title":"شیمی","value":12},
          {"title":"زیست شناسی","value":13},
   
        ]
      );
    } else
      setAnjomans([{"title":"","value":0}]);
  }

  const handlegrad=(e:any) => {
    setDefaultGrade(e.currentTarget.value)

  }
  const handlebase=(e:any) => {
    setDefaultBase(e.currentTarget.value)
  }

  const changevalue=(value:number) =>
  {
    chageFavirotes(value);
    chageanjoman(value);
     if (value<=6) {
      setGrades([{"title":" ابتدایی","value":1}]);
      setDefaultGrade("ابتدایی")
    }else if (value>6 && value<=9) {
      setGrades([{"title":" متوسطه اول","value":2}]);
      setDefaultGrade("متوسطه اول")
    }else {
      setDefaultGrade("ریاضی")
      setGrades([{"title":" ریاضی","value":3},{"title":" تجربی","value":4},
      {"title":" علوم انسانی","value":5},{"title":" فنی و حرفه ای","value":6},
      {"title":" کارودانش","value":7}
    ]);
    }1
      }

  return (
    <div>
      <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css" integrity="sha384-gXt9imSW0VcJVHezoNQsP+TNrjYXoGcrqBZJpry9zJt8PCQjobwmhMGaDHTASo9N" crossOrigin="anonymous"/>
     </Head>
    <div className="container">
    <main>
      {issuccess?
    <div className="alert alert-success" role="alert">
     اطلاعات شما با موفقیت ثبت شد.
</div> :<div></div>}
{iserror?<div className="alert alert-danger" role="alert">
  {errmessage}
</div>:<div></div>}


       <div className="py-5 text-center">
            <h3>پژوهش سرای دکتر حسابی مهاباد</h3>
        <h6 className="lead">فرم ثبت نام دانش آموزان</h6>
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
                <input type="file" className={`form-control ${errors?.personimage ? 'is-invalid' : ''}`} accept="image/*" id="image1" name="personimage"  placeholder=""  required
                   onChange={handleChangeImage }
                />
                 <div className="invalid-feedback">
                      عکس پرسنلی را مشخص کنید
                 </div>
              </div>
               <div className="col-sm-10">
                 <label htmlFor="shenasnamehimage" className="form-label">صفحه اول شناسنامه </label>
                 <input type="file" className={`form-control ${errors?.shensname ? 'is-invalid' : ''}`} accept="image/*" id="image2" name="shenasnamehimage"  placeholder=""  required
                   onChange={handleChangeImage }
             />
               <div className="invalid-feedback">
                        عکس شناسنامه را وارد کنید
                </div>
              </div>
                 <div className="col-sm-10">
                 <label htmlFor="certimage" className="form-label"> گواهی اشتغال به تحصیل</label>
                <input type="file" className="form-control" accept="image/*" id="image3" name="certimage"  placeholder=""  required
                 onChange={handleChangeImage }
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
                <input type="text" className={`form-control ${errors?.name ? 'is-invalid' : ''}`} id="name"  placeholder="" value={name} required
                
                onChange={e=> {setname(e.target.value); errors.name=false}}
                />
                <div className="invalid-feedback">
               نام خود را به صورت صحیح وارد نمایید
                </div>
              </div>
  
              <div className="col-sm-4">
                <label htmlFor="family" className="form-label">نام خانوادگی</label>
                <input type="text" className={`form-control ${errors?.family ? 'is-invalid' : ''}`}  id="family" placeholder="" value={family} required
                  onChange={e=>{setFamily(e.target.value);errors.family=false}}
                />
                <div className="invalid-feedback">
                نام خانوادگی خود را وارد نمایید
                </div>
              </div>
                <div className="col-sm-4">
                <label htmlFor="fathername" className="form-label">نام پدر</label>
                <input type="text" className={`form-control ${errors?.fathername ? 'is-invalid' : ''}`} id="fathername" placeholder="" value={fathername} 
                
                required
                 onChange={e=>{setFathername(e.target.value);errors.fathername=false}}
                />
                <div className="invalid-feedback">
                نام پدر خود را وارد نمایید
                </div>
              </div>
              <div className="col-sm-4">
                <label htmlFor="nationalcode" className="form-label">کد ملی </label>
                <input type="number" className={`form-control ${errors?.nationalcode ? 'is-invalid' : ''}`} id="nationalcode" placeholder="" value={nationalcode} required
                 onChange={e=>{setNationlacode(e.target.value);errors.nationalcode=false}}
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
                <select className="form-select" id="gradebase" required
                       onChange={handlegrad}       
                >
                   {   grades.map((element)=><option key={"grade"+element.value} >{element.title}
                         
                     </option>)
                   }
                
              </select>
                <div className="invalid-feedback">
                     رشته تحصیلی خود را وارد نمایید
                </div>
              </div>
              <div className="col-sm-4">
                <label htmlFor="schoolname" className="form-label"> آموزشگاه محل تحصیل</label>
                <input type="text" className={`form-control ${errors?.schoolname ? 'is-invalid' : ''}`} id="schoolname" placeholder="" value={schoolname} required
                  onChange={e=>{setSchoolname(e.target.value);errors.schoolname=false}}
                />
                <div className="invalid-feedback">
             نام آموزشگاه محل تحصیل خود را وارد نمایید
                </div>
              </div>
              <div className="col-sm-4">
                 <label htmlFor="mobilenumber" className="form-label"> شماره تماس</label>
                 <input type="number" className={`form-control ${errors?.phone ? 'is-invalid' : ''}`}id="mobilenumber" placeholder="" value={mobilenumber} required
                     onChange={e=>{setMobilenumber(e.target.value);errors.phone=false}}
                />
                <div className="invalid-feedback">
                شماره تماس خود را وارد نمایید
                </div>
              </div>
              <div className="col-sm-4">
                <label htmlFor="shadnumber" className="form-label"> شماره شاد</label>
                  <input type="number" className={`form-control ${errors?.shadnumber ? 'is-invalid' : ''}`} id="shadnumber" placeholder="" value={shadnumber} required
                   onChange={e=>{setShadnumber(e.target.value);errors.shadnumber=false}}
                />
                 <div className="invalid-feedback">
                شماره شاد خود را وارد نمایید
                 </div>
               </div>
            </div>
              <hr className="my-4"/>
            <h4 className="mb-3"> علاقه مندی ها</h4>
             {
                favirotes.map(favirote=><div className="form-check form-check-inline" key={"favirote"+favirote.value}>
               <input type="checkbox" className={`form-check-input ${errors?.favirote ? 'is-invalid' : ''}`} id="same-address"
               
               onChange={e=>addfavirote(favirote.title)}
               />
               <label className="form-check-label" htmlFor="same-address">{favirote.title} </label>
             </div>)
             }
            
                   
            {anjomans.length>1? <div>
              
              <hr className="my-4"/>
               <h4 className="mb-3">انجمن ها</h4>
               {
               anjomans.map(anjoman=><div className="form-check form-check-inline" key={"anjaoma"+anjoman.value}>
               <input type="checkbox" className={`form-check-input ${errors?.anjoman ? 'is-invalid' : ''}`} id="same-address"
               
               onChange={e=>addanjomans(anjoman.title)}
               />
               <label className="form-check-label" htmlFor="same-address">{anjoman.title} </label>
             </div>)
             }
                 </div>:<div></div>}
            <hr className="my-4"/>
     <button className="w-100 btn btn-primary btn-lg" id="btnsave" onClick={saveform} > ثبت نام</button>
        <div>

          <br></br>
        </div>
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

