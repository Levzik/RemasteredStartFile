$(document).ready(function(){
    // Параллакс
    if($(window).width() > 960)
    {
        $('body').parallax({
            'elements': [
                {
                    'selector': '.move',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 42.100,
                                'multiplier': 0.002,
                                'unit': '%',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': -24.5,
                                'multiplier': 0.005,
                                'unit': '%',
                                'invert': true
                            }
                        }
                    }
                },
                {
                    'selector': '.move-two',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 79.100,
                                'multiplier': 0.002,
                                'unit': '%',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': -30,
                                'multiplier': -0.005,
                                'unit': '%',
                                'invert': true
                            }
                        }
                    }
                },
                {
                    'selector': '.move-three',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 48.900,
                                'multiplier': 0.004,
                                'unit': '%',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': -86.400,
                                'multiplier': -0.008,
                                'unit': '%',
                                'invert': true
                            }
                        }
                    }
                },
                {
                    'selector': '.move-four',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 81.900,
                                'multiplier': 0.004,
                                'unit': '%',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': -86.0,
                                'multiplier': -0.008,
                                'unit': '%',
                                'invert': true
                            }
                        }
                    }
                },
                {
                    'selector': '.move-five',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 75.900,
                                'multiplier': 0.002,
                                'unit': '%',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial':62.400,
                                'multiplier': -0.005,
                                'unit': '%',
                                'invert': false
                            }
                        }
                    }
                },
                {
                    'selector': '.move-six',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': -60.900,
                                'multiplier': 0.002,
                                'unit': '%',
                                'invert': true
                            }
                        },
                        'y': {
                            'top': {
                                'initial':20.400,
                                'multiplier': -0.005,
                                'unit': '%',
                                'invert': false
                            }
                        }
                    }
                }
            ]
        });
    } else {
        // change functionality for larger screens
    }
});