function Form() {
	const handleSubmit = e => {
		e.preventDefault()
	}
    return (
        <form id="formMail" onSubmit={handleSubmit} action="">
			<div className="nameLast">
				<div className="name">
					<label for="name">Name <span className="required">*</span></label>
					<input type="text" className="name-input" name="name" placeholder="Name" required />
				</div>
				<div className="lastName">
					<label for="lastName">Last Name <span className="required">*</span></label>
					<input type="text" className="lastName-input" name="lastName" placeholder="Last Name" required  />
				</div>
			</div>
			<div className="email">
				<label for="email">E-Mail <span className="required">*</span></label>
				<input type="email" name="email" className="email-input" placeholder="E-Mail" required />
			</div>
			<div className="subject">
				<label for="subject">Subject <span className="required">*</span></label>
				<textarea name="subject" className="subject-textarea" placeholder="You can consult me on any topic or make a joke."></textarea>
			</div>
			<div className="submit">
				<input type="submit" value="Send (Not Working)" />
			</div>
		</form>
    )
}

export default Form