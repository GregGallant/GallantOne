<?php
namespace Portfolio;

return array(
    'controllers' => array(
        'invokables' => array(
            'Portfolio\Controller\Portfolio' => 'Portfolio\Controller\PortfolioController',
        ),
    ),

    'router' => array(
        'routes' => array(
            // Main Photography page
            'portfolio' => array(
                'type' => 'segment',
                'options' => array(
                    'route' => '/portfolio[/:id]',
                    'constraints' => array(
                        'id' => '[0-9]+',
                        'controller' => 'Portfolio\Controller\Portfolio',
                        'action' => 'index',
                    ),
                    'defaults' => array(
                        'controller' => 'Portfolio\Controller\Portfolio',
                        'action' => 'index',
                    ),
                ),
            ),
            // LightBox portLayout Route
            'light' => array(
                'type' => 'segment',
                'options' => array(
                    'route' => '/light[/:id]',
                    'constraints' => array(
                        'id' => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Portfolio\Controller\Portfolio',
                        'action' => 'light',
                    ),
                ),
            ),

            'mobile' => array(
                'type' => 'segment',
                'options' => array(
                    'route' => '/mobile[/:id]',
                    'constraints' => array(
                        'id' => '[0-9]+',
                    ),

                    'defaults' => array(
                        'controller' => 'Portfolio\Controller\Portfolio',
                        'action' => 'mobile',
                    ),

                ),
            ),

            // Contact form
            'contact' => array(
                'type' => 'segment',
                'options' => array(
                    'route' => '/contact',
                    'constraints' => array( ),
                    'defaults' => array(
                        'controller' => 'Portfolio\Controller\Portfolio',
                        'action' => 'contact',
                    ),
                ),
            ),
        ),
    ),

    'view_manager' => array(
        'template_path_stack' => array(
            'portfolio' => __DIR__ . '/../view',
        ),
    ),
    // Doctrine config
    'doctrine' => array(
        'driver' => array(
            __NAMESPACE__ . '_driver' => array(
                'class' => 'Doctrine\ORM\Mapping\Driver\AnnotationDriver',
                'cache' => 'array',
                'paths' => array(__DIR__ . '/../src/' . __NAMESPACE__ . '/Entity')
            ),
            'orm_default' => array(
                'drivers' => array(
                    __NAMESPACE__ . '\Entity' => __NAMESPACE__ . '_driver'
                )
            )
        )
    )
);