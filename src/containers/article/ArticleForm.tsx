import { Button, TextField } from "@mui/material";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IArticle, IArticleInput } from "../../types/article.type";

const initialValues = {
  title: "",
  content: ""
}

type Props = {
  onSubmit : (value: IArticleInput) => void;
  article: IArticle | null;
} 

const ArticleForm = ( { onSubmit, article }: Props) => {
  const [values, setValues ] = useState<IArticleInput> (initialValues);

  useEffect(() => {
    if (!article) return;
    setValues({
      title: article.title,
      content: article.content,
    })
  }, [article])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('values:', values);
    onSubmit(values);
    setValues(initialValues);
  }
  return (
    
      <form onSubmit={handleSubmit}>
        <TextField 
        label="title" 
        variant="outlined" 
        name="title" 
        value= {values.title}
        onChange={handleChange} />  
        <TextField
          label="content"
          multiline
          maxRows={4}
          variant="outlined"
          name="content"
          value={values.content}
          onChange={handleChange}
        />  
        <Button type="submit">
          save
        </Button>
      </form>
  );
};

export default ArticleForm;