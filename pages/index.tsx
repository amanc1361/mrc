import type { NextPage } from 'next'
import Head from 'next/head'

import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const[options,setoptions]=useState(["داستان نویسی","نقاشی","علوم","ریاضی","کتابخوانی","نجوم"]);
  const[categories,setcategories]=useState([{"title":"اول","value":1},{"title":"دوم","value":2},{"title":"سوم","value":3},{"title":"چهارم","value":4},{"title":"پنجم","value":5},{"title":"ششم","value":6},
  {"title":"هفتم","value":7},{"title":"هشتم","value":8},{"title":"نهم","value":9},{"title":"دهم","value":10},{"title":"یازدهم","value":11},{"title":"دوازدهم","value":12}]);
  const[grades,setGrades]=useState([""]);
  const[gradecategoried,setGradeCategory]=useState([]);
  const[categoryvalue,setCategoryvalue]=useState(1);
  const[favirotes,setFavirotes]=useState([""])
  const[anjomans,setAnjomans]=useState([""]);

  
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

  useEffect(()=>{
  
    chageFavirotes(categoryvalue);
  if (categoryvalue<=6) {
    setGrades(["اول ابتدایی"]);
  }else if (categoryvalue>6 && categoryvalue<=9) {
    setGrades(["متوسطه اول"]);
  }else {
    setGrades(["ریاضی","علوم انسانی","تجربی","فنی وحرفه ای","کارودانش"]);
  }
  },[]);
  
  return (
   <html
   dir="rtl"
   lang="fr"
   >
  
     <Head>
    
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css" integrity="sha384-gXt9imSW0VcJVHezoNQsP+TNrjYXoGcrqBZJpry9zJt8PCQjobwmhMGaDHTASo9N" crossorigin="anonymous"/>
     </Head>
    <div className="container">
    <main>
      <div className="py-5 text-center">
            <h3>پژوهشسرای دکتر حسابی</h3>
        <p className="lead">فرم ثبت نام دانش آموزان</p>
      </div>
  
      <div className="row g-3">
        
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">مشخصات فردی دانش آموز</h4>
          <form className="needs-validation" noValidate>
            <div className="row g-3">
              <div className="col-sm-4">
                <label htmlFor="firstName" className="form-label">نام</label>
                <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
                <div className="invalid-feedback">
               نام خود را به صورت صحیح وارد نمایید
                </div>
              </div>
  
              <div className="col-sm-4">
                <label htmlFor="lastName" className="form-label">نام خانوادگی</label>
                <input type="text" className="form-control" id="lastName" placeholder="" value="" required/>
                <div className="invalid-feedback">
                نام خانوادگی خود را وارد نمایید
                </div>
              </div>
                <div className="col-sm-4">
                <label htmlFor="lastName" className="form-label">نام پدر</label>
                <input type="text" className="form-control" id="fathername" placeholder="" value="" required/>
                <div className="invalid-feedback">
                نام پدر خود را وارد نمایید
                </div>
              </div>
              <div className="col-sm-4">
                <label htmlFor="lastName" className="form-label">کد ملی </label>
                <input type="text" className="form-control" id="fathername" placeholder="" value="" required/>
                <div className="invalid-feedback">
                کد ملی خود را به صورت صحیح وارد نمایید
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="country" className="form-label">پایه تحصیلی</label>
                <select className="form-select" id="country" required onChange={(e)=>changevalue(Number(e.target.value))
                }
                
                >
                  {categories.map((element)=><option value={element.value}>{element.title}</option>)}
                  
                 
                </select>
                <div className="invalid-feedback">
            پایه تحصیلی خود را وارد نمایید
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="country" className="form-label">رشته تحصیلی</label>
                <select className="form-select" id="country" required>
                   {
                     grades.map((element)=><option>{element}</option>)
                   }
                  
                
                </select>
                <div className="invalid-feedback">
            پایه تحصیلی خود را وارد نمایید
                </div>
              </div>
              <div className="col-sm-4">
                <label htmlFor="lastName" className="form-label"> آموزشگاه محل تحصیل</label>
                <input type="text" className="form-control" id="fathername" placeholder="" value="" required/>
                <div className="invalid-feedback">
                نام پدر خود را وارد نمایید
                </div>
              </div>
              <div className="col-sm-4">
                <label htmlFor="lastName" className="form-label"> شماره تماس</label>
                <input type="text" className="form-control" id="fathername" placeholder="" value="" required/>
                <div className="invalid-feedback">
                نام پدر خود را وارد نمایید
                </div>
              </div>
              <div className="col-sm-4">
                <label htmlFor="lastName" className="form-label"> شماره شاد</label>
                <input type="text" className="form-control" id="fathername" placeholder="" value="" required/>
                <div className="invalid-feedback">
                نام پدر خود را وارد نمایید
                </div>
              </div>
  
  
           
  
  
           
  
             
  
             
            </div>
  
            <hr className="my-4"/>
            <h4 className="mb-3"> علاقه مندی ها</h4>
             {
               favirotes.map(favirote=><div className="form-check form-check-inline">
               <input type="checkbox" className="form-check-input" id="same-address"/>
               <label className="form-check-label" htmlFor="same-address">{favirote} </label>
             </div>)
             }
            
         

  
  
  
  
  
           
            {anjomans.length>1? <div>
              
              <hr className="my-4"/>
               <h4 className="mb-3">انجمن ها</h4>
               {
               anjomans.map(anjoman=><div className="form-check form-check-inline">
               <input type="checkbox" className="form-check-input" id="same-address"/>
               <label className="form-check-label" htmlFor="same-address">{anjoman} </label>
             </div>)
             }
  
               </div>:<div></div>}
          
  
           
       
  
            <hr className="my-4"/>
  
            <button className="w-100 btn btn-primary btn-lg" type="submit"> ثبت نام</button>
          </form>
        </div>
      </div>
      
    </main>
    </div>
    </html>
  )
}
export default Home
