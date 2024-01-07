import { TextField } from "@mui/material";
import { useState } from "react";
import { IArticleInput } from "../../types/Article.type";

const ArticleForm = () => {
  const [values, setValues ] = useState<IArticleInput> ({
    title: "",
    content: ""
  })

  return (
    
      <form>
        <TextField label="title" variant="outlined" name="title" value= {values.title}/>  
      </form>
    
  );
};

export default ArticleForm;