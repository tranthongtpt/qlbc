import './detailuser.css'

function DetailUser() {
    return ( 
        <div>

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
                    <button type="submit" className="btn">Cập nhật</button>
                </div>
                </form>
            </div>

            <div className="content-wrapper">
                <div class="card-header mb-2r">
                <div class="page-title">Danh sách người dùng</div>
                <div class="table-search">
                    <input type="text" placeholder="search"/>
                    <button class="btn-search" type="submit">
                        <i class='bx bx-search'></i>
                    </button>
                </div>
                </div>
                <table class="table">
                <thead>
                    <tr>
                        <th>Họ và tên</th>
                        <th>Email</th>
                        <th>Địa chỉ</th>
                        <th>Số điện thoại</th>
                        <th>Đơn vị trực thuộc</th>
                        <th>Phân quyền</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nguyễn Văn A</td>
                        <td>abc@gmail.com</td>
                        <td>666 nguyễn văn linh</td>
                        <td>0123456789</td>
                        <td>Báo tdanh niên</td>
                        <td>CQNN</td>
                        <td>
                            <a href="#" class="btn-icon xanh-color">
                            <i class='bx bx-edit'></i>
                            </a>
                            <a href="#" class="btn-icon red-color">
                            <i class='bx bx-basket'></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Nguyễn Văn A</td>
                        <td>abc@gmail.com</td>
                        <td>666 nguyễn văn linh</td>
                        <td>0123456789</td>
                        <td>Báo tdanh niên</td>
                        <td>CQNN</td>
                        <td>
                            <a href="#" class="btn-icon xanh-color">
                            <i class='bx bx-edit'></i>
                            </a>
                            <a href="#" class="btn-icon red-color">
                            <i class='bx bx-basket'></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Nguyễn Văn A</td>
                        <td>abc@gmail.com</td>
                        <td>666 nguyễn văn linh</td>
                        <td>0123456789</td>
                        <td>Báo tdanh niên</td>
                        <td>CQNN</td>
                        <td>
                            <a href="#" class="btn-icon xanh-color">
                            <i class='bx bx-edit'></i>
                            </a>
                            <a href="#" class="btn-icon red-color">
                            <i class='bx bx-basket'></i>
                            </a>
                        </td>
                    </tr>
                </tbody>
                </table>
                <div class="pagination">
                <div class="text-show"><p>Hiện thị 1 trong 30 trang</p></div>
                <div class="boxx">
                    <ul>
                        <li><a href="#">Trước</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">Sau</a></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
        
     );
}

export default DetailUser;