import { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

export default function BasicDemo() {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Show"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <InputText value={value} onChange={(e) => setValue(e.target.value)} />
        <InputText value={value} onChange={(e) => setValue(e.target.value)} />
        <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
      </Dialog>
    </div>
  );
}
