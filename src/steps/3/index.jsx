import { TextField, Typography } from "@mui/material";
import Instructions from "../../instructions";
import App from "./app";

const CODE = `if ((filter === "active" && task.done) || (filter === "done" && !task.done)) {\n  return null;\n}`;

export default function Step1() {
  return (
    <div>
      <App />
      <Instructions>
        <Typography variant="h5" my={3}>
          Step 3: Code
        </Typography>
        <Typography variant="body1" my={3}>
          You may have noticed that the filter buttons don’t do anything. Let’s
          fix that.
        </Typography>
        <Typography variant="body1" my={3}>
          <strong>Your task:</strong> Right-click on the &lt;List&gt; and choose
          “Open in Editor”. Then add the following code at the very start of the
          map function (before <code>labelId</code>)
        </Typography>
        <TextField
          label="Code"
          fullWidth
          multiline
          rows={6}
          defaultValue={CODE}
          inputProps={{
            readOnly: true,
            sx: { fontFamily: "monospace", fontSize: 12 },
          }}
        />
        <Typography variant="body1" my={3}>
          Save the file and when you come back here, the filter buttons should
          be working.
        </Typography>
      </Instructions>
    </div>
  );
}