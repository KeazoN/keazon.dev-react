import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

  function MeetSkeleton() {
    return (
      <>
        {Array(4).fill().map((data, index) => {
          return(
            <div key={ index } className="card">
              <SkeletonTheme baseColor="#555" highlightColor="#f8f2db">
                  <h1 className="meetTitle"><Skeleton height={13} width={`70%`} /></h1>
                  <p className="meetDesc"><Skeleton count={3} height={9} width={`100%`} /></p>
              </SkeletonTheme>
            </div>
         )
        })}
      </>
    );
  };

  function MainSkeleton() {
    return (
      <>
          <div className="homeText placeholder">    
            <SkeletonTheme baseColor="#555" highlightColor="#f8f2db">
                <h1><Skeleton height={25} width={`100%`} /> <Skeleton height={25} width={`40%`} /></h1>
                <p><Skeleton count={3} height={9} width={`100%`} /></p>
            </SkeletonTheme>
            <SkeletonTheme baseColor="#555" highlightColor="#f8f2db">
              <Skeleton height={40} width={`23%`} />
            </SkeletonTheme>
          </div>
          <div className="homePicture placeholder">
            <SkeletonTheme baseColor="#555" highlightColor="#f8f2db">
                <Skeleton height={`290px`} width={`290px`} circle={true} />
            </SkeletonTheme>
          </div>
      </>
    );
  };

  function NavbarSkeleton(children) {
    return (
          <>
            <div className="logoNav">
              <SkeletonTheme baseColor="#555" highlightColor="#f8f2db">
                <Skeleton height={`40px`} width={`40px`} />
              </SkeletonTheme>
            </div>
            <ul className='menu'>
              <SkeletonTheme baseColor="#555" highlightColor="#f8f2db">
                <li><Skeleton height={`10px`} width={`45px`} /></li>
                <li><Skeleton height={`10px`} width={`45px`} /></li>
                <li><Skeleton height={`10px`} width={`45px`} /></li>
                <li><Skeleton height={`10px`} width={`45px`} /></li>
                <li><Skeleton height={`10px`} width={`45px`} /></li>  
                <li><Skeleton height={`30px`} width={`30px`} circle={true} /></li>
              </SkeletonTheme>
            </ul>
          </>
    )
  }

  export {
    MeetSkeleton,
    MainSkeleton,
    NavbarSkeleton
  };