let app = angular.module("myApp",[])

const API_URL = 'https://covid19.mathdro.id/api';
const c_url ='https://covid19.mathdro.id/api/countries/';
app.controller("myController", ($scope,$http)=>{
   

    $scope.name="Sourav"
    $scope.fun2=()=>{

        let country = $scope.c
        if(country==''){
            return
        }
        $http.get(`${API_URL}/countries/${country}`).then(
            // success
            (val)=>{
                $scope.c_data = val.data
            console.log(val.data)
        },
        //error
        (err)=>{
            console.log(err)
        }
        )
    }
    $http.get(API_URL).then( (data)=>{
        //success
        console.log(data.data)
        $scope.c_case=data.data.confirmed.value
        $scope.all_data = data.data
        
    },
    (error)=>{
        console.log(error)
    }
        //error
        
    )
})