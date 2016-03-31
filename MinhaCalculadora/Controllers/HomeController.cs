using MinhaCalculadoraWeb.Logica;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MinhaCalculadora.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public ActionResult CalcularSoma(double a, double b)
        {
            double resultado = Calculadora.Adicao(a, b);
            return Json(resultado);
        }
        [HttpPost]
        public ActionResult CalcularSubtracao(double a, double b)
        {
            double resultado = Calculadora.Subtracao(a, b);
            return Json(resultado);
        }
        [HttpPost]
        public ActionResult CalcularMultiplicacao(double a, double b)
        {
            double resultado = Calculadora.Multiplicacoa(a, b);
            return Json(resultado);
        }
        [HttpPost]
        public ActionResult CalcularDivisao(double a, double b)
        {
            double resultado = Calculadora.Divisao(a, b);
            return Json(resultado);
        }


    }
}