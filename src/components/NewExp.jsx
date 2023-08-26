import React, { useStatee } from 'react';

function FormValidation() {
  const [firstName, setFirstName] = useStatee('');
  const [surname, setSurname] = useStatee('');
  const [email, setEmail] = useStatee('');
  const [newPassword, setNewPassword] = useStatee('');
  const [errors, setErrors] = useStatee({
    firstName: '',
    surname: '',
    email: '',
    newPassword: '',
  });
  const [success, setSuccess] = useStatee(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (firstName === '') newErrors.firstName = 'First Name is required.';
    if (surname === '') newErrors.surname = 'Surname is required.';
    if (email === '') newErrors.email = 'Email is required.';
    if (newPassword === '') newErrors.newPassword = 'New Password is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccess(false);
    } else {
      setErrors({});
      setSuccess(true);
    }
  };

  const handleInputChange = (field, value) => {
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }

    if (field === 'firstName') setFirstName(value);
    else if (field === 'surname') setSurname(value);
    else if (field === 'email') setEmail(value);
    else if (field === 'newPassword') setNewPassword(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
          />
          {errors.firstName && <div className="error">{errors.firstName}</div>}
        </div>
        <div>
          <label>Surname:</label>
          <input
            type="text"
            value={surname}
            onChange={(e) => handleInputChange('surname', e.target.value)}
          />
          {errors.surname && <div className="error">{errors.surname}</div>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => handleInputChange('newPassword', e.target.value)}
          />
          {errors.newPassword && <div className="error">{errors.newPassword}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {success && <div className="success">Looks Good.</div>}
    </div>
  );
}

export default FormValidation;
