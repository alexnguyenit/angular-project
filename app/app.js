var myapp = angular.module("myapp",[]);

myapp.controller("mycontroller",function($scope){
	$scope.title = "My Project";
	$scope.ketqua = "Kết quả";
	$scope.pheptinh = function(){
		var soThuNhat = parseInt($scope.txtSothunhat);
		var soThuHai = parseInt($scope.txtSothuhai);

		switch($scope.type) {
		    case '+':
		        $scope.ketqua = soThuNhat + soThuHai;
		        break;
		    case '-':
		        $scope.ketqua = soThuNhat - soThuHai;
		        break;
		    case '*':
		        $scope.ketqua = soThuNhat * soThuHai;
		        break;
		    case '/':
		        $scope.ketqua = soThuNhat / soThuHai;
		        break;
		    default:
		        break;
		}
	}
});