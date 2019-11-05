import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./Button";
import { size, style, color, icon, iconPosition, shadow } from "./ButtonTypes";

storiesOf("Button", module)

  .add("Size", () => (
    <div>
      <Button
        size={size.small}
        onClick={action("clicked")}
        label="Small"
      />

      <Button
        size={size.medium}
        onClick={action("clicked")}
        label="Medium"
      />

      <Button
        size={size.large}
        onClick={action("clicked")}
        label="Large"
      />

      <Button
        size={size.extraLarge}
        onClick={action("clicked")}
        label="Extra Large"
      />
    </div>
  ))

  .add("Color", () => (
    <div>

      <Button
        color={color.neutral}
        onClick={action("clicked")}
        label="Neutral"
      />

      <Button
        color={color.primary}
        onClick={action("clicked")}
        label="Primary"
      />

      <Button
        color={color.success}
        onClick={action("clicked")}
        label="Success"
      />

      <Button
        color={color.info}
        onClick={action("clicked")}
        label="Info"
      />

      <Button
        color={color.danger}
        onClick={action("clicked")}
        label="Danger"
      />

      <Button
        color={color.warning}
        onClick={action("clicked")}
        label="Warning"
      />

      <Button
        color={color.white}
        onClick={action("clicked")}
        label="White"
      />

    </div>
  ))

  .add("Style", () => (
    <div>
      <Button
        style={style.solid}
        onClick={action("clicked")}
        label="Solid Button"
      />

      <Button
        style={style.outline}
        onClick={action("clicked")}
        label="Outline Button"
      />

      <Button
        style={style.ghost}
        onClick={action("clicked")}
        label="Ghost Button"
      />

    </div>

  ))

  .add("Icon", () => (
    <Button
      color={color.primary}
      onClick={action("clicked")}
      label="Ghost Button"
    />
  ))

  .add("Shadow", () => (
    <Button
      color={color.primary}
      onClick={action("clicked")}
      label="Ghost Button"
    />
  ))

  ;