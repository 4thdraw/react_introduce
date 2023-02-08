
import Scrollspy from "react-scrollspy";

function Navi(){
    const naviDb = [{
      naviText : "포트폴리오",
      naviLink : "#portfolio"
    },
    {
      naviText : "인물탐방",
      naviLink : "#me"
                    },
    {
      naviText : "사전인터뷰 및 제안",
      naviLink : "#preInterview"
                    }
    ];
    return(
        <Scrollspy className="d-flex mb-0 gnb_ul " items={[naviDb[0].naviLink,naviDb[1].naviLink,naviDb[2].naviLink] } currentClassName="is-current">
     
        {
          naviDb.map((item, index) =>{
            return(
              <li id={ 'naivID'+index } key={ 'naivID'+index } ><a href={item.naviLink} className="text-decoration-none ps-md-3 pe-md-0 px-3">{item.naviText}</a></li>
            )
          }
          )
            
        }
      </Scrollspy>
    )
  }

  export default Navi;