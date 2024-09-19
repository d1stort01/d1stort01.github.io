using System;  
using System.Net;  
using System.IO;
using System.Text;
using Newtonsoft.Json;

class TestApp
{
   public static void Main()
   {
       using (var client = new WebClient())
            {
                ServicePointManager.SecurityProtocol = SecurityProtocolType.Ssl3
                                       | SecurityProtocolType.Tls
                                       | SecurityProtocolType.Tls11
                                       | SecurityProtocolType.Tls12;
                client.Encoding = Encoding.UTF8;
                client.Headers.Add("Authorization","Bearer lip_2HAxNSCyraaKzc3DX5Ro");
                string serviceAddress = "https://lichess.org/api/account";//请求URL地址
                var data = client.DownloadString(serviceAddress);
                var result = JSON.Deserialize<dynamic>(data);
                Console.Write(data);
                Console.ReadKey();

            }

   }
   
}