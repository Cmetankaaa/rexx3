import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

type FormState = {
  inputs: string[];
  textarea: string;
  checkboxes: boolean[];
};

type FormConfig = {
    input: number;
    textarea: number;
    checkbox: number;
};

const DynamicForm = () => {
  const location = useLocation();
  const config = location.state as FormConfig;
  
  const [formState, setFormState] = useState<FormState>({
    inputs: Array(config.input).fill(''),
    textarea: '',
    checkboxes: Array(config.checkbox).fill(false)
  });

  useEffect(() => {
    setFormState({
      inputs: Array(config.input).fill(''),
      textarea: '',
      checkboxes: Array(config.checkbox).fill(false)
    });
  }, [config]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Данные с формы:', formState);
    alert('Форма готова. Чекни консоль на наличие данных');
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      {formState.inputs.map((value, index) => (
        <div className="form-element" key={`input-${index}`}>
          <input
            type="text"
            placeholder={`Input ${index + 1}`}
            value={value}
            onChange={(e) => {
              const newInputs = [...formState.inputs];
              newInputs[index] = e.target.value;
              setFormState({...formState, inputs: newInputs});
            }}
          />
        </div>
      ))}
      
      {config.textarea > 0 && (
        <div className="form-element">
          <textarea
            placeholder="Enter text here"
            value={formState.textarea}
            onChange={(e) => setFormState({...formState, textarea: e.target.value})}
            rows={4}
          />
        </div>
      )}
      
      {formState.checkboxes.map((checked, index) => (
        <div className="checkbox-group" key={`checkbox-${index}`}>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => {
              const newCheckboxes = [...formState.checkboxes];
              newCheckboxes[index] = e.target.checked;
              setFormState({...formState, checkboxes: newCheckboxes});
            }}
          />
          <label>Checkbox {index + 1}</label>
        </div>
      ))}
      
      <button type="submit" className="button">
        Submit Form
      </button>
    </form>
  );
};

export default DynamicForm;