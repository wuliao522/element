using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebZhongZhi.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Home1()
        {
            return View();
        }

        public ActionResult Home2()
        {
            ViewBag.Message = "Your application description page.";
            return View();
        }

        public ActionResult Home3()
        {
            ViewBag.Message = "Your contact page.";
            return View();
        }

        public ActionResult Home4()
        {
            return View();
        }

        public ActionResult Home5()
        {
            return View();
        }
        public ActionResult Home6()
        {
            return View();
        }
        public ActionResult Home7()
        {
            return View();
        }
        public ActionResult Home8()
        {
            return View();
        }
    }
}