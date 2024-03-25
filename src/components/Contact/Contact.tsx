import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "../ui/button"

const Contact = () => {
  return (
    <div className="flex items-center bg-gray-300 p-3 justify-center gap-3" id="contact">
        <a href="https://github.com/muztahiddurjoy" target="_blank">
            <Button size="icon">
            <Github height={20} width={20} className="stoke-theme1"/>
            </Button>
        </a>
        <a href="https://www.linkedin.com/in/muztahid-durjoy-8282b226b/" target="_blank">
            <Button size="icon">
            <Linkedin height={20} width={20} className="stoke-theme1"/>
            </Button>
        </a>
        <a href="tel:+8801521712242" target="_blank">
            <Button size="icon">
            <Phone height={20} width={20} className="stoke-theme1"/>
            </Button>
        </a>
        <a href="mailto:muztahiddurjoy99@gmail.com" target="_blank">
            <Button size="icon">
            <Mail height={20} width={20} className="stoke-theme1"/>
            </Button>
        </a>
    </div>
  )
}

export default Contact