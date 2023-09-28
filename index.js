const app = angular.module("app",[]);

app.controller('todoDir',($scope, $http)=>{

    $scope.database = [];
    $scope.selectedId;
    $scope.id = 0;


    $scope.create= function (){
        $scope.database.push({id: $scope.id, content: $scope.selectedContent, status: "Doing..."});
        $scope.selectedContent=''
        $scope.id++;
    }

    $scope.delete = function (id){
        let left = [], right = [];
        for(let i=0; i<$scope.database.length; i++){
            if($scope.database[i].id == id){
                left = $scope.database.slice(0,i);
                right = $scope.database.slice(i+1);
                break;
            }
        }

        let newD = left.concat(...right);

        $scope.database = [...newD];

    }

    $scope.update = function (todo){
        console.log(todo)
        $scope.selectedContent = todo.content;
        $scope.selectedId = todo.id

    }

    $scope.put = function (id){
        if(id!==null){
            for(let i=0; i<$scope.database.length; i++){
                if($scope.database[i].id == id){
                    $scope.database[i].content = $scope.selectedContent;
                    $scope.selectedContent = ''
                    break;
                }
            }
        }

    }
})

