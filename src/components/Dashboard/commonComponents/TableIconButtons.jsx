import { IconButton, ButtonToolbar, ButtonGroup, Button } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import AddOutlineIcon from '@rsuite/icons/AddOutline';
import PlusIcon from '@rsuite/icons/Plus';
import { Icon } from '@rsuite/icons';
import 'rsuite/IconButton/styles/index.css';
import { GrDocumentPdf } from "react-icons/gr";
import { SiMicrosoftexcel } from "react-icons/si";
import { PiPrinterLight } from "react-icons/pi";


const CustomButtonGroup = ({ appearance }) => (
    <ButtonToolbar>
      <ButtonGroup>
      <IconButton appearance={appearance}  size='sm'  className='' color="" icon={<Icon className='' as={GrDocumentPdf } size="1em" />}>
        
      </IconButton>
      <IconButton appearance={appearance} size='sm'  className='' color="" icon={<Icon className='' as={SiMicrosoftexcel } size="1em" />}>
        
      </IconButton>
      <IconButton appearance={appearance}  size='sm' className='' color="" icon={<Icon className='' as={PiPrinterLight } size="1em" />}>
        
      </IconButton>
        {/* <Button appearance={appearance}>Left</Button>
        <Button appearance={appearance}>Center</Button>
        <Button appearance={appearance}>Right</Button> */}
      </ButtonGroup>
    </ButtonToolbar>
  );

  export default CustomButtonGroup;