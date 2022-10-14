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
                     <label for="">Họ và tên</label>
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
                  <div className="card">
                     <label className="role">Phân quyền</label>
                     <select className="form-control" name="account">
                        <option>Vui lòng chọn</option>
                        <option>Cơ quan nhà nước</option>
                        <option>Phóng viên</option>
                     </select>
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