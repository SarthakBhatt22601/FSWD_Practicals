<!DOCTYPE html>

<html>
  <head>
    <title>Twitter Users Data</title>
      <script type="text/javascript" src="./data.js"></script>
      <script>
        JSONToCSVConvertor(data, "twitter_data", true);

        function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
          var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
          var photosdata = {}
            for (var i = 0; i < arrData.length; i++) {
                photosdata [i] = {arrData[i]["id"]: [arrData[i]["albumId"], arrData[i]["url"]]};
            }
        }
        </script>
    </head>
</html>
