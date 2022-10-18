import './contentwrapper.css';
import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

function ContentWrapper() {

   const [age, setAge] = React.useState('');
   const [inputs,setInputs] =useState({});
   

   const handleChange = (e) => {
      setAge(e.target.value);

      const name = e.target.name;
      const value = e.target.value;
      setInputs(values => ({...values, [name]: value}))
   };
   
   const [values, setValues] = useState({
      username: '',
      email: '',
      units: '',
      role: ''
   });
   
   const handleSubmit = async (e) =>{
      e.preventDefault();
      const {id, ...payload} = values;

      // try{
      //    if(id) {
      //       await axios.put()
      //    }
      // }
   }

    return ( 
        <div className="content-wrapper">
            <div className="card-header">
               <label className="page-title">Form đăng ký</label>
            </div>
            <form action="#">
               <div className="body-card">
                  <div className="card">
                     <InputLabel htmlFor="my-input">Họ và tên</InputLabel>
                     <TextField 
                        id="my-input" 
                        type="text" 
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name={inputs.givename}   
                     />
                     {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
                  </div>
                  <div className="card">
                     <InputLabel htmlFor="my-input">Email</InputLabel>
                     <TextField 
                        id="my-input" 
                        type="text" 
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name={inputs.email}    
                     />
                  </div>
                  <div className="card">
                     <InputLabel htmlFor="my-input">Đơn vị trực thuộc</InputLabel>
                     <TextField 
                        id="my-input" 
                        type="text" 
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name={inputs.units}    
                     />
                  </div>
                  <div className="card">
                     <InputLabel htmlFor="my-input">Phân quyền</InputLabel>
                     <FormControl sx={{ m: 1, minWidth: 400 }}>
                        <Select
                           value={age}
                           onChange={handleChange}
                           displayEmpty
                           margin="normal"
                           name={inputs.role}
                           className="form-control"
                        >
                           <MenuItem value="">
                              <em>Vui lòng chọn</em>
                           </MenuItem>
                           <MenuItem value={10}>Ten</MenuItem>
                           <MenuItem value={20}>Cơ quan nhà nước</MenuItem>
                           <MenuItem value={30}>Phóng viên</MenuItem>
                        </Select>
                     </FormControl>
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