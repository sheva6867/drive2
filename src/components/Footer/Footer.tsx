import './Footer.scss'
import {useMemo} from "react";
import {footerLinks} from "../../contstants/defaultData";
import {Link} from "react-router-dom";

function Footer() {
    const renderFooter = useMemo(() => {
        return footerLinks.map((link, index) => {
            return <Link key={index} to={'a'}>{link}</Link>
        })
    }, [])
    return (
        <div className={'footer_body'}>
            <div className={'footer_links'}>
                {renderFooter}
            </div>
        </div>
    )
}

export default Footer;
