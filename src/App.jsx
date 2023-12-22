import Card from './components/Card'

function App() {

  const data=[{
    package:"FREE",
    rupee:"$1",
    duration:"/month",
    user:"Single User",
    isUser:true,
    Store:"5GB Storage",
    isStore:true,
    project:"Unlimited Public Projects",
    isProject:true,
    access:"Community Access",
    isAccess:true,
    projects:"Unlimited Private Projects",
    isProjects:false,
    support:"Dedicated Phone Support",
    isSupport:false,
    domain:"Free Subdomain",
    isDomain:false,
    report:"Monthly Status Reports",
    isReport:false,
    btn:"Button",
    isButton:true
  },
  {
    package:"PLUS",
    rupee:"$9",
    duration:"/month",
    user:"5 Users",
    isUser:true,
    Store:"50GB Storage",
    isStore:true,
    project:"Unlimited Public Projects",
    isProject:true,
    access:"Community Access",
    isAccess:true,
    projects:"Unlimited Private Projects",
    isProjects:true,
    support:"Dedicated Phone Support",
    isSupport:true,
    domain:"Free Subdomain",
    isDomain:true,
    report:"Monthly Status Reports",
    isReport:false,
    btn:"Button",
    isButton:true
  },
  {
    package:"PRO",
    rupee:"$49",
    duration:"/month",
    user:"Unlimited Users",
    isUser:true,
    Store:"150 GB Storage",
    isStore:true,
    project:"Unlimited Public Projects",
    isProject:true,
    access:"Community Access",
    isAccess:true,
    projects:"Unlimited Private Projects",
    isProjects:true,
    support:"Dedicated Phone Support",
    isSupport:true,
    domain:"Free Subdomain",
    isDomain:true,
    report:"Monthly Status Reports",
    isReport:true,
    btn:"Button",
    isButton:true
  },
]
  
  return<>
    <section className="pricing py-5">
      <div className="container">
       <div className="row">
      {/* <!-- Free Tier --> */}
      
            {
            data.map((e,i)=>{
              return<Card  cardData={e} key={i}/>
            })
          }
       </div> 
     </div>   
    </section>
      
      </>    

}

export default App
