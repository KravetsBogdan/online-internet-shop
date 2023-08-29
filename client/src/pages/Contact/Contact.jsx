import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Container,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useStyles, fieldStyle } from "./ContactStyles";
import { initialValues, validationSchema } from "./formSettings";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const classes = useStyles();
  emailjs.init("hGkWN5ybqobaBvF13");
  const handleFormSubmit = async (values, { resetForm }) => {
    try {
      await emailjs.send(
        "service_ka9z14d",
        "template_f4bb6o9",
        values,
        "hGkWN5ybqobaBvF13"
      );
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container maxWidth="lg" className={classes.formContainer}>
      <Typography variant="h3" className={classes.heading}>
        Contact Us
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        Say Hello! Send us your thoughts about our products or share your ideas
        with our Team!
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting, handleSubmit }) => (
          <Form>
            <Grid container spacing={5}>
              <Grid item xs={6}>
                <Field
                  as={TextField}
                  name="firstName"
                  label="First name"
                  className={classes.field}
                  sx={fieldStyle}
                />
                <ErrorMessage name="firstName" component="div" />
              </Grid>
              <Grid item xs={6}>
                <Field
                  as={TextField}
                  name="lastName"
                  label="Last name"
                  className={classes.field}
                  sx={fieldStyle}
                />
                <ErrorMessage name="lastName" component="div" />
              </Grid>
              <Grid item xs={6}>
                <Field
                  as={TextField}
                  name="email"
                  label="Email"
                  className={classes.field}
                  sx={fieldStyle}
                />
                <ErrorMessage name="email" component="div" />
              </Grid>
              <Grid item xs={6}>
                <Field
                  as={Select}
                  label="Subject*"
                  name="subject"
                  className={classes.field}
                  displayEmpty
                  sx={{
                    "& .MuiSelect-select": {
                      textAlign: "left",
                    },
                    "& .MuiMenuItem-root": {
                      textAlign: "left",
                    },
                    "& fieldset": {
                      border: "none",
                      borderBottom: `1px solid ${"#D8D8D8"}`,
                      borderRadius: "0px",
                      marginRight: "5vw",
                    },
                  }}
                >
                  <MenuItem value="">
                    <span>Subject</span>
                  </MenuItem>
                  <MenuItem value="Refund">Refund</MenuItem>
                  <MenuItem value="Exchange">Exchange</MenuItem>
                  <MenuItem value="Feedback">Feedback</MenuItem>
                  <MenuItem value="Another question">Another question</MenuItem>
                </Field>
                <ErrorMessage name="subject" component="div" />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="message"
                  label="Message"
                  multiline
                  rows={5}
                  className={classes.field}
                  sx={fieldStyle}
                />
                <ErrorMessage name="message" component="div" />
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.buttonContainer}>
              <div style={{ paddingBottom: "20px" }}>
                <CustomButton
                  type="submit"
                  value={"SEND"}
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                />
              </div>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ContactForm;
