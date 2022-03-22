import React from "react";
import { useCombobox } from "downshift";
import { Combobox, Menu, Wrapper } from "./style";
import Icons from "../icons";

function Dropdown({ items, update, label, defaultValue }) {
  const [inputItems, setInputItems] = React.useState(items);
  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    openMenu,
    closeMenu,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        items.filter((item) =>
          item.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      );
    },

    onSelectedItemChange: ({ selectedItem }) => {
      update(selectedItem);
      closeMenu();
    },
    defaultInputValue: defaultValue || "",
    defaultSelectedItem: defaultValue || null,
  });

  return (
    <Wrapper>
      <label {...getLabelProps()}>{label}</label>
      <Combobox {...getComboboxProps()} data-testid="downshift-container">
        <input
          {...getInputProps({
            onFocus: () => {
              openMenu();
            },
            placeholder: "Select a make",
          })}
          data-testid="dropdown-component"
        />
        <Icons glyph="arrowdown" size={16} onClick={() => openMenu()} />
      </Combobox>
      <Menu {...getMenuProps()} isOpen={isOpen} data-testid="dropdown-list">
        {isOpen && (
          <>
            {inputItems.map((item, index) => (
              <li
                style={
                  highlightedIndex === index
                    ? { backgroundColor: "#bde4ff" }
                    : {}
                }
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
              >
                {item}
              </li>
            ))}
          </>
        )}
      </Menu>
    </Wrapper>
  );
}

export default Dropdown;
