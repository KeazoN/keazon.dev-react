import CatSvg from '../../img/cat.svg'
import Form from './Contact/Form'
import { contact, contentTitle, contactContent, catsSvg, cats } from '../../css/module/contact.module.css'

function Contact() {
	return (
		<section class={contact}>
					<div class="container">
						<div class={contentTitle}><h1>Contact</h1></div>
						<div class={contactContent}>
							<Form />
							<div class={catsSvg}>
								<div class={cats}>
									<img src={CatSvg} />
								</div>
							</div>
						</div>
					</div>
				</section>
	)
}

export default Contact