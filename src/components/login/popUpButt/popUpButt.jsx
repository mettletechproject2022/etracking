import "bootstrap/dist/css/bootstrap.min.css";

export const Popupbutt = () => {

    const popUpWindow = (s) => {
        let params = `width=600,height=600,left=100,top=100,scrollbars=yes`;
        console.log("popUpWindow")
    if(s==='mob')
      window.open("/otp", "test", params);
      if(s==='email')
      window.open("/forgot", "test", params);
      };

  return (
    <div className="popbtn">
      <button type="button" onClick={()=>popUpWindow('mob')} class="btn btn-outline-success">
        MOBILE OTP
      </button>

      <button type="button" onClick={()=>popUpWindow('email')} class="btn btn-outline-info">
        EMAIL
      </button>
    </div>
  );
};
export default Popupbutt;