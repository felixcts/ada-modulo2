import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root',
})

export class TransactionsService {

  // A URL da nossa API do json-server
  private apiUrl = 'http://localhost:3000/transactions';

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}`);
  }

  getTransactionById(id: string): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.apiUrl}/${id}`);
  }

  createTransaction(
    transaction: Omit<Transaction, 'id'>
  ): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.apiUrl}`, transaction);
  }

  updateTransaction(transaction: Transaction, id: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, transaction);
  }

/*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Delete a transaction by id.
   * @param {string} id The id of the transaction to be deleted.
   * @returns {Observable<void>} An observable that completes when the transaction is deleted.
   * @example
   * this.transactionsService.deleteTransaction('123').subscribe(() => {
   *   console.log('Transaction deleted');
   * });
   */
/*******  a5e12ee6-6c2e-4cff-9ad0-a8859d723072  *******/
  deleteTransaction(id: string): Observable<void> {
    // Exemplo para enviar um motivo de cancelamento junto com a requisição de DELETE
    const params = new HttpParams().set('motivo', 'cancelamento');
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { params });
  }
}
