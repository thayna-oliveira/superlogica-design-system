import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./Button"; 

storiesOf("Button", module)

  .add("Color", () => (
    <div>
      <Button>Danger</Button>
      <Button primary>Danger</Button>
      <Button success>Danger</Button>
      <Button info>Danger</Button>
      <Button danger>Danger</Button>
      <Button warning>Danger</Button>
      <Button white>Danger</Button>
      <Button colorLibrary>Danger</Button>
    </div>
  ))

  ;