import './contentwrapper.css';

function ContentWrapper() {
    return ( 
        <div className="content-wrapper">
            <div className="card-header">
               <label className="page-title">Form đăng ký</label>
            </div>
            <form action="#">
               <div className="body-card">
                  <div className="card">
                     <label for="">Họ</label>
                     <input type="text" className="form-control" name="account" value=""/>
                  </div>
                  <div className="card">
                     <label for="">Tên</label>
                     <input type="text" className="form-control" name="account" value=""/>
                  </div>
                  <div className="card">
                     <label for="">Email</label>
                     <input type="text" className="form-control" name="account" value=""/>
                  </div>
                  <div className="card">
                     <label for="">Đơn vị trực thuộc</label>
                     <input type="text" className="form-control" name="account" value=""/>
                  </div>
                  <div className="card-option">
                     <label className="role">Phân quyền</label>
                     <div className="choose-radio">
                        <div className="form-check">
                           <input type="radio" className="form-check-input" name="option" value="option1" style="height:16px; width:16px; vertical-align: middle;"/>
                           <label className="form-check-label" for="option_pv">Phóng viên</label>
                        </div>
                        <div className="form-check">
                           <input type="radio" className="form-check-input" name="option" value="option1"  style="height:16px; width:16px; vertical-align: middle;"/>
                           <label className="form-check-label" for="option_cqnn">Cơ quan nhà nước</label>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="layout-btn">
                  <button type="submit" className="btn">Hủy</button>
                  <button type="submit" className="btn">Thêm người dùng</button>
               </div>
            </form>
         </div>
     );
}

export default ContentWrapper;