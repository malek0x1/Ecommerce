import React from "react";
import { Dropdown } from "@nextui-org/react";

export default function MultiSelect({ options,text,type }) {
  const [selected, setSelected] = React.useState(new Set([text]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <Dropdown>
      <Dropdown.Button flat color="primary" css={{ tt: "capitalize",backgroundColor: "#000",color:"#FFF"  }}>
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Multiple selection actions"
        // color="secondary"
        disallowEmptySelection
        selectionMode={type}
        selectedKeys={selected}
        onSelectionChange={setSelected}
        
      >
        {options.map(item => 
        (<Dropdown.Item key={item}>{item}</Dropdown.Item>)
        )}

      </Dropdown.Menu>
    </Dropdown>
  );
}
