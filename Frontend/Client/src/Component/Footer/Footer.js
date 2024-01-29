import {
  PushpinOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white', padding: '8px 0px 0px 41px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1, padding: '10px' }}>
          <h5 style={{ fontWeight: 'bold' }}>Help</h5>
          <h5 style={{ color: 'gray' }}>FAQ</h5>
        </div>

        <div style={{ flex: 1, padding: '10px' }}>
          <h5 style={{ fontWeight: 'bold' }}>Policy</h5>
          <h5 style={{ color: 'gray' }}>Privacy Policy</h5>
          <h5 style={{ color: 'gray' }}>Terms and Condition</h5>
        </div>

        <div style={{ flex: 1, padding: '10px' }}>
          <h5 style={{ fontWeight: 'bold' }}>About</h5>
          <h5 style={{ color: 'gray' }}>Contact Us</h5>
          <h5 style={{ color: 'gray' }}>About Us</h5>
        </div>

        <div style={{ flex: 1, padding: '10px' }}>
          <h5 style={{ fontWeight: 'bold' }}>Contact</h5>
          <h5 style={{ color: 'gray', marginRight: '10px' }}><PushpinOutlined style={{ marginRight: '5px' }} />Maradana Road, Colombo 0008</h5>
          <h5 style={{ color: 'gray', marginRight: '10px' }}><PhoneOutlined style={{ marginRight: '5px' }} />+94112275088</h5>
          <h5 style={{ color: 'gray', marginRight: '10px' }}><MailOutlined style={{ marginRight: '5px' }} />cs@orel.com</h5>
        </div>

        <div style={{ flex: 1, padding: '10px' }}>
          <h5 style={{ fontWeight: 'bold' }}>Download Now</h5>
          <img src="Frontend\Client\public\DawnlodNow.png" alt="Download Now" style={{ marginTop: '10px' }} />
        </div>
      </div>
    </footer>

  );
};

export default Footer;

