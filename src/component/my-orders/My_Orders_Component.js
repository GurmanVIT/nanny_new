import React from 'react';
import about from '../../assets/img/about.jpg';
import next_btn from '../../assets/img/next_btn.png';
import call_btn from '../../assets/img/call_btn.png';


const My_Orders_Component = () => {
    return (
        <>
            <div class="container">
                <div class="row order_card mb-1">
                    <mat-tab-group animationDuration="100ms">
                        <mat-tab label="Ongoing" class="">
                            <div class="all_order_box py-4 px-1">
                                <mat-card>
                                    <mat-card-content>
                                        <div class="nany_orders">
                                            <img src={about} alt="user" class="rounded-circle" />
                                            <div class="nanny-info">
                                                <h2 class="mb-2">Ocational Nanny</h2>
                                                <div class="location mb-1 d-flex align-items-baseline"><i class=" fa fa-location me-1"></i><span>48752 mohali punjab hn  mohali punjab</span></div>
                                                <p class="time mb-0 text-truncate">25 Jan <span>05:20 PM</span></p>
                                            </div>
                                            <h2 class="text-start text-sm-end text-md-start text-lg-end">$120</h2>
                                        </div>
                                        <div class="ordered_persons pt-3 align-items-center">
                                            <img src={about} alt="user" class="rounded-circle" />
                                            <div class="nanny-small-info">
                                                <h4 class="mb-0">Ocational Nanny</h4>
                                                <div class="star d-flex align-items-baseline">
                                                    <i class=" fa fa-star me-1"></i>
                                                    <span>4.5</span>
                                                </div>
                                            </div>
                                            <button class="btn btn-ongiing px-3 py-2 border-0">On The Way</button>
                                        </div>
                                    </mat-card-content>
                                </mat-card>

                                <mat-card>
                                    <mat-card-content>
                                        <div class="nany_orders">
                                            <img src={about} alt="user" class="rounded-circle" />
                                            <div class="nanny-info">
                                                <h2 class="mb-2">Ocational Nanny</h2>
                                                <div class="location mb-1 d-flex align-items-baseline"><i class=" fa fa-location me-1"></i><span>48752 mohali punjab hn  mohali punjab</span></div>
                                                <p class="time mb-0 text-truncate">25 Jan <span>05:20 PM</span></p>
                                            </div>
                                            <h2 class="text-start text-sm-end text-md-start text-lg-end">$120</h2>
                                        </div>
                                        <div class="ordered_persons pt-3 align-items-center">
                                            <img src={about} alt="user" class="rounded-circle" />
                                            <div class="nanny-small-info">
                                                <h4 class="mb-0">Ocational Nanny</h4>
                                                <div class="star d-flex align-items-baseline">
                                                    <i class=" fa fa-star me-1"></i>
                                                    <span>4.5</span>
                                                </div>
                                            </div>
                                            <button class="btn btn-ongiing px-3 py-2 border-0">On The Way</button>
                                        </div>
                                    </mat-card-content>
                                </mat-card>

                                <mat-card>
                                    <mat-card-content>
                                        <div class="nany_orders">
                                            <img src={about} alt="user" class="rounded-circle" />
                                            <div class="nanny-info">
                                                <h2 class="mb-2">Ocational Nanny</h2>
                                                <div class="location mb-1 d-flex align-items-baseline"><i class=" fa fa-location me-1"></i><span>48752 mohali punjab hn  mohali punjab</span></div>
                                                <p class="time mb-0 text-truncate">25 Jan <span>05:20 PM</span></p>
                                            </div>
                                            <h2 class="text-start text-sm-end text-md-start text-lg-end">$120</h2>
                                        </div>
                                        <div class="ordered_persons pt-3 align-items-center">
                                            <img src={about} alt="user" class="rounded-circle" />
                                            <div class="nanny-small-info">
                                                <h4 class="mb-0">Ocational Nanny</h4>
                                                <div class="star d-flex align-items-baseline">
                                                    <i class=" fa fa-star me-1"></i>
                                                    <span>4.5</span>
                                                </div>
                                            </div>
                                            <button class="btn btn-ongiing px-3 py-2 border-0">On The Way</button>
                                        </div>
                                    </mat-card-content>
                                </mat-card>

                                <mat-card>
                                    <mat-card-content>
                                        <div class="nany_orders">
                                            <img src={about} alt="user" class="rounded-circle" />
                                            <div class="nanny-info">
                                                <h2 class="mb-2">Ocational Nanny</h2>
                                                <div class="location mb-1 d-flex align-items-baseline"><i class=" fa fa-location me-1"></i><span>48752 mohali punjab hn  mohali punjab</span></div>
                                                <p class="time mb-0 text-truncate">25 Jan <span>05:20 PM</span></p>
                                            </div>
                                            <h2 class="text-start text-sm-end text-md-start text-lg-end">$120</h2>
                                        </div>
                                        <div class="ordered_persons pt-3 align-items-center">
                                            <img src={about} alt="user" class="rounded-circle" />
                                            <div class="nanny-small-info">
                                                <h4 class="mb-0">Ocational Nanny</h4>
                                                <div class="star d-flex align-items-baseline">
                                                    <i class=" fa fa-star me-1"></i>
                                                    <span>4.5</span>
                                                </div>
                                            </div>
                                            <button class="btn btn-ongiing px-3 py-2 border-0">Reached</button>
                                        </div>
                                    </mat-card-content>
                                </mat-card>
                            </div>
                        </mat-tab>

                        <mat-tab label="Upcoming">
                            <div class="all_order_box py-4 px-1">
                                <mat-card>
                                    <mat-card-content>
                                        <div class="nany_orders">
                                            <img src={about} alt="user" class="rounded-circle" />
                                            <div class="nanny-info">
                                                <h2 class="mb-2">Ocational Nanny</h2>
                                                <div class="location mb-1 d-flex align-items-baseline"><i class=" fa fa-location me-1"></i><span>48752 mohali punjab hn  mohali punjab</span></div>
                                                <p class="time mb-0 text-truncate">25 Jan <span>05:20 PM</span></p>
                                            </div>
                                            <h2 class="text-start text-sm-end text-md-start text-lg-end">$120</h2>
                                        </div>
                                        <div class="upcoming_option pt-3 d-flex justify-content-between align-items-center">
                                            <a href="" class="mb-0">Cancel Booking</a>
                                            <div class="upcoming_btns d-flex align-items-center">
                                                <a href="#" class="me-3"><img src={next_btn} alt="logo" /></a>
                                                <a href="#"><img src={call_btn} alt="logo" /></a>
                                            </div>
                                        </div>
                                    </mat-card-content>
                                </mat-card>
                            </div>
                        </mat-tab>

                        <mat-tab label="Past">
                            <div class="all_order_box py-4 px-1">
                                <mat-card>
                                    <mat-card-content>
                                        <div class="nany_orders">
                                            <img src={about} alt="user" class="rounded-circle" />
                                            <div class="nanny-info">
                                                <h2 class="mb-2">Ocational Nanny</h2>
                                                <div class="location mb-1 d-flex align-items-baseline"><i class=" fa fa-location me-1"></i><span>48752 mohali punjab hn  mohali punjab</span></div>
                                                <p class="time mb-0 text-truncate">25 Jan <span>05:20 PM</span></p>
                                            </div>
                                            <h2 class="text-start text-sm-end text-md-start text-lg-end">$120</h2>
                                        </div>
                                        <div class="ordered_persons pt-3 align-items-center">
                                            <img src={about} alt="user" class="rounded-circle" />
                                            <div class="nanny-small-info">
                                                <h4 class="mb-0">Ocational Nanny</h4>
                                                <div class="star d-flex align-items-baseline">
                                                    <i class=" fa fa-star me-1"></i>
                                                    <span>4.5</span>
                                                </div>
                                            </div>
                                            <button class="btn btn-success-nany px-3 py-2 border-0">Success</button>
                                        </div>
                                    </mat-card-content>
                                </mat-card>

                                <mat-card>
                                    <mat-card-content>
                                        <div class="nany_orders">
                                            <img src={about} alt="user" class="rounded-circle" />
                                            <div class="nanny-info">
                                                <h2 class="mb-2">Ocational Nanny</h2>
                                                <div class="location mb-1 d-flex align-items-baseline"><i class=" fa fa-location me-1"></i><span>48752 mohali punjab hn  mohali punjab</span></div>
                                                <p class="time mb-0 text-truncate">25 Jan <span>05:20 PM</span></p>
                                            </div>
                                            <h2 class="text-start text-sm-end text-md-start text-lg-end">$120</h2>
                                        </div>
                                        <div class="ordered_persons pt-3 align-items-center">
                                            <img src={about} alt="user" class="rounded-circle" />
                                            <div class="nanny-small-info">
                                                <h4 class="mb-0">Ocational Nanny</h4>
                                                <div class="star d-flex align-items-baseline">
                                                    <i class=" fa fa-star me-1"></i>
                                                    <span>4.5</span>
                                                </div>
                                            </div>
                                            <button class="btn btn-cancel-nany px-3 py-2 border-0">Cancelled</button>
                                        </div>
                                    </mat-card-content>
                                </mat-card>
                            </div>
                        </mat-tab>
                    </mat-tab-group>
                </div>
            </div>
        </>
    )
}

export default My_Orders_Component;