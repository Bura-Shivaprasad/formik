// import React from "react";
// import "./Form.css";
// import { useFormik } from "formik";
// import { signUpSchema } from "./schemas";
// import { Button } from "@mui/material";

// const initialValues = {
//   name: "",
//   email: "",
//   password: "",
//   confirm_password: "",
// };

// function form() {
//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       initialValues: initialValues,
//       validationSchema: signUpSchema,
//       onSubmit: (values, action) => {
//         console.log(values);
//         action.resetForm();
//       },
//     });
//   console.log(errors);
//   return (
//     <div className="container">
//       <div>
//         <h3>WELCOME TO FORMIK</h3>
//         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div className="input1">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             autoComplete="off"
//             name="name"
//             id="name"
//             value={values.name}
//             onChange={handleChange}
//             onBlur={handleBlur}
//           />
//           {errors.name && touched.name ? (
//             <p className="error-message"> {errors.name}</p>
//           ) : null}
//         </div>
//         <div className="input1">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             autoComplete="off"
//             name="email"
//             id="email"
//             value={values.email}
//             onChange={handleChange}
//             onBlur={handleBlur}
//           />
//           {errors.email && touched.email ? (
//             <p className="error-message"> {errors.email}</p>
//           ) : null}
//         </div>
//         <div className="input1">
//           <label htmlFor="password">password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             autoComplete="off"
//             name="password"
//             id="password"
//             value={values.password}
//             onChange={handleChange}
//             onBlur={handleBlur}
//           />
//           {errors.password && touched.password ? (
//             <p className="error-message"> {errors.password}</p>
//           ) : null}
//         </div>

//         <div className="input1">
//           <label htmlFor="confirm_password">Confirm Password</label>
//           <input
//             type="password"
//             placeholder="Confirm your password"
//             autoComplete="off"
//             name="confirm_password"
//             id="confirm_password"
//             value={values.confirm_password}
//             onChange={handleChange}
//             onBlur={handleBlur}
//           />
//           {errors.confirm_password && touched.confirm_password ? (
//             <p className="error-message"> {errors.confirm_password}</p>
//           ) : null}
//         </div>

//         <div>
//           <Button variant="contained" color="secondary" type="submit"> Registration </Button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default form;
import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

function form() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
    
  return (
    <Container maxWidth="sm" className="container">
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          WELCOME TO FORMIK
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <Box sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors.name && touched.name)}
            helperText={errors.name && errors.touched ? errors.name : ""}
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors.email && touched.email)}
            helperText={errors.email && touched.email ? errors.email : ""}
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors.password && touched.password)}
            helperText={
              errors.password && touched.password ? errors.password : ""
            }
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            variant="outlined"
            name="confirm_password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors.confirm_password && touched.confirm_password)}
            helperText={
              errors.confirm_password && touched.confirm_password
                ? errors.confirm_password
                : ""
            }
          />
        </Box>

        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Button variant="contained" color="primary" type="submit">
            Registration
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default form;
