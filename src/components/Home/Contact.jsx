import CatSvg from '../../img/cat.svg'
import Form from './Contact/Form'

function Contact() {
    return (
        <section className="contact" id="contact">
					<div className="container">
						<div className="contentTitle"><h1>Contact</h1></div>
						<div className="contactContent">
							<Form />
							<div className="catsSvg">
								<div className="cats">
									<img src={CatSvg} alt="keazon kedi" />
								</div>
							</div>
						</div>
					</div>
				</section>
    )
}

export default Contact