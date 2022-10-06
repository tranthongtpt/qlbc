
import ContentWrapper from '../Contentwrapper/ContentWrapper';
import TopBar from '../TopBar/TopBar';
import './pagewrapper.css'
import '../Contentwrapper/contentwrapper.css'
function PageWrapper() {
    return ( 
        <div classNameName="page-wrapper">
            <TopBar/>
            <div classNameName="content-wrapper">
                <div classNameName="card-header">
                    <label classNameName="page-title">Form đăng ký</label>
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
                            <label for="">Địa chỉ</label>
                            <input type="text" className="form-control" name="account" value=""/>
                        </div>
                        
                        <div className="card">
                            <label for="">Số điện thoại</label>
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
                        <div>
                            <label className="role">Phân quyền</label>
                            <div className="choose-radio">
                                <div className="form-check">
                                    <input type="radio" className="form-check-input" name="option" value="option1" style={{height:"16px",width:"16px",verticalAlign:"middle"}}/>
                                    <label className="form-check-label" for="option_pv">Phóng viên</label>
                                </div>
                                <div className="form-check">
                                    <input type="radio" className="form-check-input" name="option" value="option1" style={{height:"16px",width:"16px",verticalAlign:"middle"}}/>
                                    <label className="form-check-label" for="option_cqnn">Cơ quan nhà nước</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="layout-btn">
                        <button type="submit" className="btn">Cập nhật</button>
                    </div>
                </form> 
            </div>
        </div>
     );
}

export default PageWrapper;