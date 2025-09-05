import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Modal
} from "@mui/material";
import CartItem from "./CartItem";
import AddressCard from "./AddressCard";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import React from "react";

import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Field } from "formik";
import { TextField } from "@mui/material";


export default function Cart() {
  const items = [1, 1];
  const addresses = [1, 2, 3]; // sample address list

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    outline: "none",
    boxShadow: 24,
    p: 4,
  };

  // Initial values for Formik
  const initialValues = {
    streetAddress: "",
    state: "",
    pincode: "",
    city: "",
  };

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    streetAddress: Yup.string().required("Street address is required"),
    state: Yup.string().required("State is required"),
    pincode: Yup.string().required("Pincode is required"),
    city: Yup.string().required("City is required"),
  });

  // Handle form submit
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);
    alert("Form submitted successfully ✅");
    resetForm();
    setOpen(false); // close modal
  };

  const createOrderUsingSelectedAddress = () => {};
  const handleOpenAddressModal = () => setOpen(true);

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  return (
    <>
      <main className="justify-between lg:flex">
        {/* Left side: Cart items & Bill details */}
        <section className="lg:w-[50vh] space-y-6 lg:min-h-screen pt-20">
          {items.map((item, index) => (
            <CartItem key={index} />
          ))}

          <Divider />

          {/* Bill Details */}
          <div className="px-5 text-sm billDetail">
            <p className="py-5 font-extralight">Bill Details</p>

            <div className="flex justify-between">
              <p>Item Total</p>
              <p>$5555</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery Fee</p>
              <p>321</p>
            </div>
            <div className="flex justify-between">
              <p>Platform Fee</p>
              <p>34</p>
            </div>
            <div className="flex justify-between">
              <p>GST</p>
              <p>55</p>
            </div>

            <Divider />

            <div className="flex justify-between font-semibold">
              <p>Total</p>
              <p>5965</p>
            </div>
          </div>
        </section>

        {/* Divider between sections */}
        <Divider orientation="vertical" flexItem />

        {/* Right side: Address selection */}
        <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
          <div>
            <h1 className="py-10 text-2xl font-semibold text-center">
              Choose Delivery Address
            </h1>

            <div className="flex flex-wrap justify-center gap-5">
              {addresses.map((item, index) => (
                <AddressCard
                  handleSelectAddress={createOrderUsingSelectedAddress}
                  key={index}
                  item={item}
                  showButton={true}
                />
              ))}
              <Card className="flex w-64 gap-5 p-5 border rounded-lg shadow-md">
                <AddLocationAltIcon fontSize="large" />
                <div className="space-y-4">
                  <h1 className="text-lg font-semibold text-center">
                    Add New Address
                  </h1>

                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={handleOpenAddressModal}
                  >
                    Add
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>



<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <Grid item xs={12}>
  <Field name="streetAddress">
    {({ field, meta }) => (
      <TextField
        {...field}
        label="Street Address"
        fullWidth
        variant="outlined"
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      />
    )}
  </Field>
</Grid>

<Grid item xs={12}>
  <Field name="state">
    {({ field, meta }) => (
      <TextField
        {...field}
        label="State"
        fullWidth
        variant="outlined"
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      />
    )}
  </Field>
</Grid>

<Grid item xs={12}>
  <Field name="pincode">
    {({ field, meta }) => (
      <TextField
        {...field}
        label="Pincode"
        fullWidth
        variant="outlined"
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      />
    )}
  </Field>
</Grid>

<Grid item xs={12}>
  <Field name="city">
    {({ field, meta }) => (
      <TextField
        {...field}
        label="City"
        fullWidth
        variant="outlined"
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      />
    )}
  </Field>
</Grid>
        </Form>
      )}
    </Formik>
  </Box>
</Modal>

    </>
  );
}
