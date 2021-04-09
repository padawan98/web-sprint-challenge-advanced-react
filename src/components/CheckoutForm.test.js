import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
    const header = screen.queryByText(/checkout form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>);
    const firstnameInput = screen.getByLabelText("First Name:");
    userEvent.type(firstnameInput, "Petrone");
    const lastnameInput = screen.getByLabelText("Last Name:");
    userEvent.type(lastnameInput, "Rejected");
    const addressInput = screen.getByLabelText("Address:");
    userEvent.type(addressInput, "1500 S Van Ness Ave #100");
    const cityInput = screen.getByLabelText("City:");
    userEvent.type(cityInput, "San Francisco");
    const stateInput = screen.getByLabelText("State:");
    userEvent.type(stateInput, "CA");
    const zipInput = screen.getByLabelText("Zip:");
    userEvent.type(zipInput, "94110");
    const button = screen.getByRole("button");
    userEvent.click(button);
    const sSubmitted = await screen.queryByTestId(/successMessage/i);
    expect(sSubmitted).toBeInTheDocument();
    
});

