<?php
namespace Admin\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

class AdminController extends AbstractActionController
{

    protected $pManager; // PortfolioManager class

    /*
    public function initAdminManager()
    {
        $sm = $this->getServiceLocator();
        $this->pManager = new AdminManager($sm);
    }
    */
    /**
     * @return \Zend\View\Model\ViewModel
     */
    public function indexAction()
    {

        /* Give router info to this */
        $route = $this->getServiceLocator()->get('router');
        $thisRoute = $route->getRequestUri()->getPath();

        $view = new ViewModel(array('thisRoute'=>$thisRoute));
        return $view;
    }
}