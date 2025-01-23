//Controller to handle page logic
exports.getHomePage = (req, res) => {
          res.json({ title: 'Home Page', content: 'Welcome to the Healthcare Management System.' });
        };
        
        exports.getServicesPage = (req, res) => {
          res.json({ title: 'Services Page', content: 'Healthcare services we offer.' });
        };
        
        exports.getAboutPage = (req, res) => {
          res.json({ title: 'About Page', content: 'Information about our Healthcare system.' });
        };
        
        exports.getContactPage = (req, res) => {
          res.json({ title: 'Contact Page', content: 'Reach us at our location.' });
        };
        