import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import './footer.css'
function Footer() {


    return (
        <div id="footer" style={{ backgroundColor: '#006A4D' }}>
            <Grid id="links" container alignItems={"center"} justifyContent={'center'}>
                <Grid item>
                    <Grid container alignItems={"center"} justifyContent={'center'}>
                        <ul>
                            <li>
                                <a>
                                   <strong>Personal Banking</strong> 
                                </a>
                            </li>
                            <li>
                                <a  href="http://www.lloydsbank.com/security.asp" title="opens in a new window">
                                    Security
                                </a>
                            </li>
                            <li>
                                <a href="http://www.lloydsbank.com/legal.asp" title="opens in a new window">
                                    Legal
                                </a>
                            </li>
                            <li>
                                <a href="http://www.lloydsbank.com/privacy2.asp" title="opens in a new window">
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a href="http://www.lloydsbankinggroup.com/">
                                    www.lloydsbankinggroup.com
                                </a>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
                <Grid Item>
                    <Grid container alignItems={"center"} justifyContent={'center'}>
                        <p>
                            Lloyds Bank plc. Registered Office: 25 Gresham Street, London EC2V 7HN. Registered in England and Wales no. 2065 Lloyds Bank plc is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority under registration number 119278.
                        </p>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    );
}

export default Footer;