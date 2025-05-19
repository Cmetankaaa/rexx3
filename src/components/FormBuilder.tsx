import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type FormConfig = {
  input: number;
  textarea: number;
  checkbox: number;
};

const validateNumberInput = (value: string): number => {
  const cleanedValue = value.replace(/\D/g, ''); 
  return cleanedValue === '' ? 0 : Math.max(0, parseInt(cleanedValue, 10));
};

const FormBuilder = () => {
  const [config, setConfig] = useState<FormConfig>({ input: 0, textarea: 0, checkbox: 0 });
  const navigate = useNavigate();

  const handleInputChange = (field: keyof FormConfig, value: string) => {
    const numericValue = validateNumberInput(value);
    setConfig(prev => ({ ...prev, [field]: numericValue }));
  };

  const handleBuild = () => {
    navigate('/form/display', { state: config });
  };

  return (
    <div className="container">
      <div className="input-group">
        <label>Number of Inputs:</label>
        <input
          type="text"
          className="input-field"
          value={config.input || ''}
          onChange={(e) => handleInputChange('input', e.target.value)}
          placeholder="Enter number"
        />
      </div>

      <div className="input-group">
        <label>Number of Textareas:</label>
        <input
          type="text"
          className="input-field"
          value={config.textarea || ''}
          onChange={(e) => handleInputChange('textarea', e.target.value)}
          placeholder="Enter number"
        />
      </div>

      <div className="input-group">
        <label>Number of Checkboxes:</label>
        <input
          type="text"
          className="input-field"
          value={config.checkbox || ''}
          onChange={(e) => handleInputChange('checkbox', e.target.value)}
          placeholder="Enter number"
        />
      </div>

      <button className="button" onClick={handleBuild}>
        Build Form
      </button>
    </div>
  );
};

export default FormBuilder;