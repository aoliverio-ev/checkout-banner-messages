import React from "react";
import {
  render,
  Text,
  BlockStack,
  useSettings,
} from "@shopify/checkout-ui-extensions-react";

// Set the entry points for the extension
render("Checkout::Dynamic::Render", () => <App />);
render("Checkout::DeliveryAddress::RenderBefore", () => <App />);

function App() {
  // Use the merchant-defined settings to retrieve the extension's content
  const {title, size: textSize} = useSettings();

  // Set a default status for the banner if a merchant didn't configure the banner in the checkout editor
  const size = textSize ?? 'base';

  // Render the banner
  return (
      <><p>Hello</p>
          <BlockStack inlineAlignment="left">
              <Text size={size}>{title}</Text>
          </BlockStack></>
  );
}