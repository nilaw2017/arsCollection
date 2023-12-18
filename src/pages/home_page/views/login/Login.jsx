import { Box, Checkbox, Input } from "@chakra-ui/react";
import * as react from "react";
import { useForm, Controller } from "react-hook-form";
import { Form } from "react-router-dom";

function Login() {
  const { control, handleSubmit,formState:{errors} } = useForm();

  function onChange(val) {
    console.log(val.target.checked);
  }
  const submit = (data) => {
    console.log(data);
  };
  return (
    <Box>
      <Box as="form" onSubmit={handleSubmit(submit)}>
        <Box as="label">
          Email:
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input type="text" value={value} onChange={onChange} />
            )}
          />
        </Box>
        <Box as="label">
          Password:
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input type="password" value={value} onChange={onChange} />
            )}
            
          />
        </Box>
        <Box as="label">
          MALE OR FEMALE:
          <Controller
            name="checkbox"
            control={control}
            render={({field:{
                onChange,
                value
            }}) => <Checkbox isChecked={value} onChange={(e)=>{
                onChange(e.target.checked)
            }} />}
          />
        </Box>
        <Input type="submit" value={"SUBMIT"} />
      </Box>
    </Box>
  );
}

export default Login;
