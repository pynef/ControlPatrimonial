/* jshint -W097 */
'use strict';
/* global angular, console, alert, $ */
angular.module('uiModule', ['ngMaterial'])
.run(['$rootScope', function($rootScope){
  console.log('run material');
}])
.controller('SwitchCtrl', function ($scope) {
  $scope.data = {
      cb1: true,
      cb4: true
  };
  $scope.onChange = function (cbState) {
      $scope.message = "The switch is now: " + cbState;
  };
})
.controller('SliderCtrl', function ($scope) {
    $scope.color = {
        red: Math.floor(Math.random() * 255),
        green: Math.floor(Math.random() * 255),
        blue: Math.floor(Math.random() * 255)
    };
    $scope.rating1 = 3;
    $scope.rating2 = 2;
    $scope.rating3 = 4;
    $scope.disabled1 = 0;
    $scope.disabled2 = 70;
})
.controller('RadiobuttonsCtrl', function ($scope) {
    $scope.data = {
        group1: 'Banana',
        group2: '2',
        group3: 'avatar-1'
    };
    $scope.radioData = [
        {label: '1', value: 1},
        {label: '2', value: 2},
        {label: '3', value: '3', isDisabled: true},
        {label: '4', value: '4'}
    ];
    $scope.submit = function () {
        alert('submit');
    };
    $scope.addItem = function () {
        var r = Math.ceil(Math.random() * 1000);
        $scope.radioData.push({label: r, value: r});
    };
    $scope.removeItem = function () {
        $scope.radioData.pop();
    };
})
.controller('CheckboxCtrl', function ($scope) {
    $scope.data = {};
    $scope.data.cb1 = true;
    $scope.data.cb2 = false;
    $scope.data.cb3 = false;
    $scope.data.cb4 = false;
    $scope.data.cb5 = false;
})
.controller('SelectCtrl', function ($scope) {
    $scope.neighborhoods = ['Chelsea', 'Financial District', 'Midtown', 'West Village', 'Williamsburg'];
    $scope.neighborhoods2 = ['Chelsea', 'Financial District', 'Lower Manhattan', 'Midtown', 'Soho', 'Upper Manhattan', 'West Village', 'Williamsburg'];
})
.controller('Demoautocomplete', function ($timeout, $q) {
    var self = this;
    // list of `state` value/display objects
    self.states = loadAll();
    self.selectedItem = null;
    self.searchText = null;
    self.querySearch = querySearch;
    self.simulateQuery = false;
    self.isDisabled = false;
    // ******************************
    // Internal methods
    // ******************************
    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch(query) {
        var results = query ? self.states.filter(createFilterFor(query)) : [],
            deferred;
        if (self.simulateQuery) {
            deferred = $q.defer();
            $timeout(function () {
                deferred.resolve(results);
            }, Math.random() * 1000, false);
            return deferred.promise;
        } else {
            return results;
        }
    }

    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
        /*jshint multistr: true */
        var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';
        return allStates.split(/, +/g).map(function (state) {
            return {
                value: state.toLowerCase(),
                display: state
            };
        });
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
        };
    }
})
.controller('DialogDemoCtrl', function ($scope, $mdDialog) {
    $scope.alert = '';
    $scope.showAlert = function (ev) {
        $mdDialog.show(
            $mdDialog.alert()
                .title('This is an alert title')
                .content('You can specify some description text in here.')
                .ariaLabel('Password notification')
                .ok('Got it!')
                .targetEvent(ev)
        );
    };
    $scope.showConfirm = function (ev) {
        var confirm = $mdDialog.confirm()
            .title('Would you like to delete your debt?')
            .content('All of the banks have agreed to forgive you your debts.')
            .ariaLabel('Lucky day')
            .ok('Please do it!')
            .cancel('Sounds like a scam')
            .targetEvent(ev);
        $mdDialog.show(confirm).then(function () {
            $scope.alert = 'You decided to get rid of your debt.';
        }, function () {
            $scope.alert = 'You decided to keep your debt.';
        });
    };
    $scope.showAdvanced = function (ev) {
        $mdDialog.show({
            controller: function ($scope, $mdDialog) {
                $scope.hide = function () {
                    $mdDialog.hide();
                };
                $scope.cancel = function () {
                    $mdDialog.cancel();
                };
                $scope.answer = function (answer) {
                    $mdDialog.hide(answer);
                };
            },
            templateUrl: 'app/views/templates/dialog1.tmpl.html',
            targetEvent: ev
        })
            .then(function (answer) {
                $scope.alert = 'You said the information was "' + answer + '".';
            }, function () {
                $scope.alert = 'You cancelled the dialog.';
            });
    };
})
.controller('ProgressCtrl', ['$scope', '$interval',
    function ($scope, $interval) {
        $scope.mode = 'query';
        $scope.determinateValue = 30;
        $interval(function () {
            $scope.determinateValue += 1;
            if ($scope.determinateValue > 100) {
                $scope.determinateValue = 30;
            }
        }, 100, 0, true);
    }
])
.controller('ProgressLinearCtrl', ['$scope', '$interval', function ($scope, $interval) {
    $scope.mode = 'query';
    $scope.determinateValue = 30;
    $scope.determinateValue2 = 30;
    $interval(function () {
        $scope.determinateValue += 1;
        $scope.determinateValue2 += 1.5;
        if ($scope.determinateValue > 100) {
            $scope.determinateValue = 30;
            $scope.determinateValue2 = 30;
        }
    }, 100, 0, true);
    $interval(function () {
        $scope.mode = ($scope.mode == 'query' ? 'determinate' : 'query');
    }, 7200, 0, true);
}])
.controller('SidenavCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = function () {
        $mdSidenav('left').toggle()
            .then(function () {
                $log.debug("toggle left is done");
            });
    };
    $scope.toggleRight = function () {
        $mdSidenav('right').toggle()
            .then(function () {
                $log.debug("toggle RIGHT is done");
            });
    };
})
.controller('SidenavLeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
        $mdSidenav('left').close()
            .then(function () {
                $log.debug("close LEFT is done");
            });
    };
})
.controller('SidenavRightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
        $mdSidenav('right').close()
            .then(function () {
                $log.debug("close RIGHT is done");
            });
    };
})
.controller('SubheaderAppCtrl', function ($scope) {
    $scope.messages = [
        {
            face: 'dist/images/user.png',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: 'dist/images/user.png',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: 'dist/images/user.png',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: 'dist/images/user.png',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: 'dist/images/user.png',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: 'dist/images/user.png',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: 'dist/images/user.png',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: 'dist/images/user.png',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: 'dist/images/user.png',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: 'dist/images/user.png',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: 'dist/images/user.png',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
    ];
})
.controller('TabsDemoCtrl', function ($scope, $log) {
    var tabs = [
        {title: 'One', content: "Tabs will become paginated if there isn't enough room for them."},
        {title: 'Two', content: "You can swipe left and right on a mobile device to change tabs."},
        {
            title: 'Three',
            content: "You can bind the selected tab via the selected attribute on the md-tabs element."
        },
        {title: 'Four', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
        {title: 'Five', content: "If you remove a tab, it will try to select a new one."},
        {
            title: 'Six',
            content: "There's an ink bar that follows the selected tab, you can turn it off if you want."
        },
        {
            title: 'Seven',
            content: "If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab."
        },
        {
            title: 'Eight',
            content: "If you look at the source, you're using tabs to look at a demo for tabs. Recursion!"
        },
        {title: 'Nine', content: "If you set md-theme=\"green\" on the md-tabs element, you'll get green tabs."},
        {title: 'Ten', content: "If you're still reading this, you should just go check out the API docs for tabs!"}
    ];
    $scope.tabs = tabs;
    $scope.selectedIndex = 2;
    $scope.$watch('selectedIndex', function (current, old) {
        if (old && (old != current)) $log.debug('Goodbye ' + tabs[old].title + '!');
        if (current)                $log.debug('Hello ' + tabs[current].title + '!');
    });
    $scope.addTab = function (title, view) {
        view = view || title + " Content View";
        tabs.push({title: title, content: view, disabled: false});
    };
    $scope.removeTab = function (tab) {
        for (var j = 0; j < tabs.length; j++) {
            if (tab.title == tabs[j].title) {
                $scope.tabs.splice(j, 1);
                break;
            }
        }
    };
})
.controller('StaticTabsDemoCtrl', function ($scope) {
    $scope.data = {
        selectedIndex: 0,
        secondLocked: true,
        secondLabel: "Item Two"
    };
    $scope.next = function () {
        $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2);
    };
    $scope.previous = function () {
        $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    };
})
.controller('ToastDemoCtrl', function($scope, $mdToast, $animate) {
    $scope.toastPosition = {
        bottom: false,
        top: true,
        left: false,
        right: true
    };
    $scope.getToastPosition = function() {
        return Object.keys($scope.toastPosition)
            .filter(function(pos) { return $scope.toastPosition[pos]; })
            .join(' ');
    };
    $scope.showCustomToast = function() {
        $mdToast.show({
            controller: 'ToastCtrl',
            templateUrl: 'app/views/templates/toast.tmpl.html',
            hideDelay: 6000,
            parent:'#toastcontainer',
            position: $scope.getToastPosition()
        });
    };
    $scope.showSimpleToast = function() {
        $mdToast.show(
            $mdToast.simple()
                .content('Simple Toast!')
                .position($scope.getToastPosition())
                .hideDelay(3000)
        );
    };
    $scope.showActionToast = function() {
        var toast = $mdToast.simple()
            .content('Action Toast!')
            .action('OK')
            .highlightAction(false)
            .position($scope.getToastPosition());
        $mdToast.show(toast).then(function() {
            alert('You clicked \'OK\'.');
        });
    };
})
.controller('ToastCtrl', function($scope, $mdToast) {
    $scope.closeToast = function() {
        $mdToast.hide();
    };
})
.controller('TooltipDemo', function($scope) {
    $scope.demo = {};
})
.controller('ToolbarShrinkDemoCtrl', function($scope) {
    var item = {
        face: 'dist/images/user.png',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        notes: "I'll be in your neighborhood doing errands."
    };
    $scope.todos = [];
    for (var i = 0; i < 15; i++) {
        $scope.todos.push({
            face: 'dist/images/user.png',
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            notes: "I'll be in your neighborhood doing errands."
        });
    }
})
.controller('TooltipCtrl', function($scope) {
  $scope.demo = {};
})
.controller('RightNavbarCtrl', function ($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function () {
    $mdSidenav('rightmessages').close()
      .then(function () {
        $log.debug("close RIGHT is done");
      });
  };
  $scope.toggleRightNavbar = function() {
    $mdSidenav('rightmessages').toggle()
      .then(function(){
        $log.debug("toggle RIGHT is done");
      });
  };
})
.controller('BottomSheetExample', function($scope, $timeout, $mdBottomSheet) {
    $scope.alert = '';
    $scope.showListBottomSheet = function($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
            templateUrl: 'app/views/templates/bottom-list.tmpl.html',
            controller: 'ListBottomSheetCtrl',
            targetEvent: $event,
            parent:'#content'
        }).then(function(clickedItem) {
            $scope.alert = clickedItem.name + ' clicked!';
        });
    };
    $scope.showGridBottomSheet = function($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
            templateUrl: 'app/views/templates/bottom-grid.tmpl.html',
            controller: 'GridBottomSheetCtrl',
            targetEvent: $event,
            parent:'#content'
        }).then(function(clickedItem) {
            $scope.alert = clickedItem.name + ' clicked!';
        });
    };
})
.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
    $scope.items = [
        { name: 'Share', icon: 'dist/img/icons/ic_share_48px.svg' },
        { name: 'Upload', icon: 'dist/img/icons/ic_cloud_upload_48px.svg' },
        { name: 'Copy', icon: 'dist/img/icons/ic_content_copy_48px.svg' },
        { name: 'Print this page', icon: 'dist/img/icons/ic_local_print_shop_48px.svg' },
    ];
    $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };
})
.controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet) {
    $scope.items = [
        { name: 'Share', icon: 'dist/img/icons/ic_share_48px.svg' },
        { name: 'Upload', icon: 'dist/img/icons/ic_cloud_upload_48px.svg' },
        { name: 'Copy', icon: 'dist/img/icons/ic_content_copy_48px.svg' },
        { name: 'Print', icon: 'dist/img/icons/ic_local_print_shop_48px.svg' },
        { name: 'Location', icon: 'dist/img/icons/ic_my_location_48px.svg' },
        { name: 'Messages', icon: 'dist/img/icons/ic_message_48px.svg' },
    ];
    $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };
})
.controller('UserBottomMenu', function($scope, $timeout, $mdBottomSheet,$route) {
    $scope.alert = '';
    $scope.showGridBottomSheet = function($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
            templateUrl: 'app/views/templates/user-bottom-grid.tmpl.html',
            controller: 'UserBottomSheetCtrl',
            targetEvent: $event,
            parent:'#content'
        }).then(function(clickedItem) {
            //$scope.alert = clickedItem.name + ' clicked!';
        });
    };
})
.controller('UserSwitchColorsCtrl', function($scope, $timeout, $mdBottomSheet,$route,config) {
  console.log('user sw cl tl');
  $scope.alert = '';
  $scope.showGridBottomSheet = function($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
      templateUrl: 'app/views/templates/user-bottom-grid.tmpl.html',
      controller: 'UserBottomSheetCtrl',
      targetEvent: $event,
      parent:'#content'
    })
    .then(function(clickedItem) {
      switch (clickedItem.machine_name) {
        case "teal":
          config.primary_color = '#009688';
          config.secondary_color = '#FF5252';
          $("#app_main_css").attr("href","dist/css/main.css");
          break;
        case "orange":
          config.primary_color = '#F57C00';
          config.secondary_color = '#7C4DFF';
          $("#app_main_css").attr("href","dist/colors/orange/css/main.css");
          break;
        case "indigo":
          config.primary_color = '#3F51B5';
          config.secondary_color = '#D81B60';
          $("#app_main_css").attr("href","dist/colors/indigo/css/main.css");
          break;
        case "red":
          config.primary_color = '#D32F2F';
          config.secondary_color = '#607D8B';
          $("#app_main_css").attr("href","dist/colors/red/css/main.css");
          break;
        case "blue":
          config.primary_color = '#1976D2';
          config.secondary_color = '#FFC107';
          $("#app_main_css").attr("href","dist/colors/blue/css/main.css");
          break;
        case "green":
          config.primary_color = '#4CAF50';
          config.secondary_color = '#607D8B';
          $("#app_main_css").attr("href","dist/colors/green/css/main.css");
          break;
        case "brown":
          config.primary_color = '#795548';
          config.secondary_color = '#009688';
          $("#app_main_css").attr("href","dist/colors/brown/css/main.css");
          break;
      }
      //console.log(config);
      $route.reload();
    });
  };
})
.controller('UserBottomSheetCtrl', function($scope, $mdBottomSheet) {
    $scope.items = [
        { name: 'Teal',machine_name:'teal',color:'#009688', icon: 'dist/img/icons/ic_gps_fixed_48px.svg' },
        { name: 'Orange',machine_name:'orange',color:'#F57C00', icon: 'dist/img/icons/ic_gps_fixed_48px.svg' },
        { name: 'Indigo',machine_name:'indigo',color:'#3F51B5', icon: 'dist/img/icons/ic_gps_fixed_48px.svg' },
        {  name: 'Red',machine_name:'red',color:'#D32F2F', icon: 'dist/img/icons/ic_gps_fixed_48px.svg' },
        {  name: 'Blue',machine_name:'blue',color:'#1976D2', icon: 'dist/img/icons/ic_gps_fixed_48px.svg' },
        { name: 'Green',machine_name:'green',color:'#4CAF50', icon: 'dist/img/icons/ic_gps_fixed_48px.svg' },
        { name: 'Brown',machine_name:'brown',color:'#795548', icon: 'dist/img/icons/ic_gps_fixed_48px.svg' }
    ];
    $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };
})
.controller('InputDemoCtrl', function($scope) {
    $scope.user = {
        title: 'Developer',
        email: 'ipsum@lorem.com',
        firstName: '',
        lastName: '' ,
        company: 'Google' ,
        address: '1600 Amphitheatre Pkwy' ,
        city: 'Mountain View' ,
        state: 'CA' ,
        biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
        postalCode : '94043'
    };
})
.controller('BasicChipsCtrl', function($timeout, $q) {
      var self = this;
      self.readonly = false;
      // Lists of fruit names and Vegetable objects
      self.fruitNames = ['Apple', 'Banana', 'Orange'];
      self.roFruitNames = angular.copy(self.fruitNames);
      self.tags = [];
      self.vegObjs = [
          {
              'name' : 'Broccoli',
              'type' : 'Brassica'
          },
          {
              'name' : 'Cabbage',
              'type' : 'Brassica'
          },
          {
              'name' : 'Carrot',
              'type' : 'Umbelliferous'
          }
      ];
      self.newVeg = function(chip) {
          return {
              name: chip,
              type: 'unknown'
          };
      };
})
.controller('ContactChipDemoCtrl', function($timeout, $q) {
      var self = this;
      self.querySearch = querySearch;
      self.allContacts = loadContacts();
      self.contacts = [self.allContacts[0]];
      self.filterSelected = true;
      /**
       * Search for contacts.
       */
      function querySearch (query) {
          var results = query ?
            self.allContacts.filter(createFilterFor(query)) : [];
          return results;
      }
      /**
       * Create filter function for a query string
       */
      function createFilterFor(query) {
          var lowercaseQuery = angular.lowercase(query);
          return function filterFn(contact) {
              return (contact._lowername.indexOf(lowercaseQuery) != -1);
          };
      }
      function loadContacts() {
          var contacts = [
              'Marina Augustine',
              'Oddr Sarno',
              'Nick Giannopoulos',
              'Narayana Garner',
              'Anita Gros',
              'Megan Smith',
              'Tsvetko Metzger',
              'Hector Simek',
              'Some-guy withalongalastaname'
          ];
          return contacts.map(function (c, index) {
              var cParts = c.split(' ');
              var contact = {
                  name: c,
                  email: cParts[0][0].toLowerCase() + '.' + cParts[1].toLowerCase() + '@example.com',
                  image: 'http://lorempixel.com/50/50/people?' + index
              };
              contact._lowername = contact.name.toLowerCase();
              return contact;
          });
      }
})
.controller('SpeedFabCtrl', function($scope) {
  $scope.demo = {
      topDirections: ['left', 'up'],
      bottomDirections: ['down', 'right'],
      isOpen: false,
      availableModes: ['md-fling', 'md-scale'],
      selectedMode: 'md-fling',
      availableDirections: ['up', 'down', 'left', 'right'],
      selectedDirection: 'up'
  };
})
.controller('HomeFabCtrl', function($scope) {
  $scope.demo = {
      isOpen: false,
      selectedMode: 'md-fling',
      selectedDirection: 'left'
  };
})
.config( function($mdThemingProvider){
  console.log('material config');
  //Configure a dark theme with primary foreground yellow
  $mdThemingProvider.theme('docs-dark', 'default')
  .primaryPalette('yellow')
  .dark();
  console.log('end config');
});
